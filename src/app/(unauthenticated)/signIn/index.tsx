import { useMutation } from "@apollo/client";
import { GENERATE_OTP, VERIFY_OTP } from "@common/graphql/mutations";
import { Text, Touchable, View } from "@components/restyled";
import tokenMethods from "@utils/tokenMethods";
import { router } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function SignIn() {
  const [generateOtp, { loading: isGeneratingOtp }] = useMutation(GENERATE_OTP);
  const [verifyOtp, { loading: isVerifyingOtp }] = useMutation(VERIFY_OTP);

  const signIn = async () => {
    try {
      await generateOtp({
        variables: {
          countryCode: "+91",
          phoneNo: "9778207807",
        },
      });

      const verifyOtpRes = await verifyOtp({
        variables: {
          countryCode: "+91",
          phoneNo: "9778207807",
          otp: "000000",
        },
      });

      tokenMethods.setTokens({
        accessToken: verifyOtpRes.data.verifyOtp.accessToken,
        refreshToken: verifyOtpRes.data.verifyOtp.refreshToken,
      });
      router.replace("/");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <View flex={1} justifyContent="center" alignItems="center" gap="xl">
      {isGeneratingOtp || isVerifyingOtp ? (
        <ActivityIndicator animating />
      ) : (
        <Touchable
          onPress={() => {
            signIn();
          }}
        >
          <Text variant="action-l" color="actionPrimary">
            Sign In
          </Text>
        </Touchable>
      )}
    </View>
  );
}
