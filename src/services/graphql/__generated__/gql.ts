/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n": types.LogoutDocument,
    "\n  mutation GenerateOtp($countryCode: String!, $phoneNo: String!) {\n    generateOtp(countryCode: $countryCode, phoneNo: $phoneNo) {\n      status\n      message\n    }\n  }\n": types.GenerateOtpDocument,
    "\n  mutation VerifyOtp($countryCode: String!, $phoneNo: String!, $otp: String!) {\n    verifyOtp(countryCode: $countryCode, phoneNo: $phoneNo, otp: $otp) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.VerifyOtpDocument,
    "\n  query GetCurrentUser {\n    getCurrentUser {\n      _id\n      email\n      firstName\n      lastName\n      phoneNo\n    }\n  }\n": types.GetCurrentUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation GenerateOtp($countryCode: String!, $phoneNo: String!) {\n    generateOtp(countryCode: $countryCode, phoneNo: $phoneNo) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateOtp($countryCode: String!, $phoneNo: String!) {\n    generateOtp(countryCode: $countryCode, phoneNo: $phoneNo) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyOtp($countryCode: String!, $phoneNo: String!, $otp: String!) {\n    verifyOtp(countryCode: $countryCode, phoneNo: $phoneNo, otp: $otp) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyOtp($countryCode: String!, $phoneNo: String!, $otp: String!) {\n    verifyOtp(countryCode: $countryCode, phoneNo: $phoneNo, otp: $otp) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrentUser {\n    getCurrentUser {\n      _id\n      email\n      firstName\n      lastName\n      phoneNo\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    getCurrentUser {\n      _id\n      email\n      firstName\n      lastName\n      phoneNo\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;