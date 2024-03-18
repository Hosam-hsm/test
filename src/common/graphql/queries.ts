import { gql } from "@services/graphql/__generated__";

export const GET_CURRENT_USER = gql(`
  query GetCurrentUser {
    getCurrentUser {
      _id
      email
      firstName
      lastName
      phoneNo
    }
  }
`);
