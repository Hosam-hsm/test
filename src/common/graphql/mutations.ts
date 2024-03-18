import { gql } from "@services/graphql/__generated__";

export const LOGOUT = gql(`
  mutation Logout {
    logout {
      message
    }
  }
`);

export const GENERATE_OTP = gql(`
  mutation GenerateOtp($countryCode: String!, $phoneNo: String!) {
    generateOtp(countryCode: $countryCode, phoneNo: $phoneNo) {
      status
      message
    }
  }
`);

export const VERIFY_OTP = gql(`
  mutation VerifyOtp($countryCode: String!, $phoneNo: String!, $otp: String!) {
    verifyOtp(countryCode: $countryCode, phoneNo: $phoneNo, otp: $otp) {
      accessToken
      refreshToken
    }
  }
`);
