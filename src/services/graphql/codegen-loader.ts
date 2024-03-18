import fetch from "cross-fetch";
import { getIntrospectionQuery, buildClientSchema } from "graphql";

export default async () => {
  const introspectionQuery = getIntrospectionQuery();
  const BASE_URL = "https://api-dev.fliiks.com/app-main";

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const data = await response.json();

  return buildClientSchema(data.data);
};
