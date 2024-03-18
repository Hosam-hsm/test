import * as SecureStore from "expo-secure-store";

const setTokens = ({
  accessToken,
  refreshToken,
}: {
  accessToken?: string;
  refreshToken?: string;
}) => {
  if (accessToken) {
    SecureStore.setItem("accessToken", accessToken);
  }
  if (refreshToken) {
    SecureStore.setItem("refreshToken", refreshToken);
  }
};

const getTokens = () => {
  const accessToken = SecureStore.getItem("accessToken");
  const refreshToken = SecureStore.getItem("refreshToken");

  return {
    accessToken,
    refreshToken,
  };
};

const clearTokens = async () => {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("refreshToken");
};

export default {
  setTokens,
  getTokens,
  clearTokens,
};
