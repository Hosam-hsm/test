import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  fromPromise,
  TypePolicies,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import toast from "@components/toast";
import tokenMethods from "@utils/tokenMethods";
import { router } from "expo-router";

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const typePolicies: TypePolicies = {
  Query: {
    fields: {},
  },
};

const refreshAccessToken = async (): Promise<string | undefined> => {
  const { refreshToken } = tokenMethods.getTokens();
  try {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation GenerateAccessToken($refreshToken: String!) {
              generateAccessToken(refreshToken: $refreshToken) {
                token
              }
            }`,
        variables: {
          refreshToken,
        },
      }),
    });

    const data = await response.json();
    const { token } = data.data.generateAccessToken;

    tokenMethods.setTokens({
      accessToken: token,
    });
    return token;
  } catch (err) {
    throw new Error("Refresh token failed", err);
  }
};

export const clearStorageAndLogout = async () => {
  await tokenMethods.clearTokens();
  client.clearStore();
  router.replace("/");
};

//create .env.development.local file and add EXPO_PUBLIC_LOCAL_API_URL='your local url' if you want to test APIs locally
const httpLink = new HttpLink({
  uri: process.env.EXPO_PUBLIC_LOCAL_API_URL ?? process.env.EXPO_PUBLIC_API_URL,
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

const authLink = setContext((_, { headers }) => {
  const { accessToken } = tokenMethods.getTokens();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (["UNAUTHENTICATED"].includes(err.extensions.code)) {
          return fromPromise(refreshAccessToken().catch(clearStorageAndLogout))
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`,
                },
              });
              return forward(operation);
            });
        } else {
          toast.showErrorToast(err.message);
        }
      }
    }
    if (networkError) {
      toast.showErrorToast(networkError.message);
    }
  },
);

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, retryLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies,
  }),
});

export default client;
