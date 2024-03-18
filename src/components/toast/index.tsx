import Icon from "@components/icon";
import { Text, View } from "@components/restyled";
import { theme } from "@theme";
import { Dimensions } from "react-native";
import Toast, { ToastOptions } from "react-native-root-toast";

const containerStyle = {
  width: Dimensions.get("window").width - 16,
  padding: theme.spacing.m,
  paddingTop: theme.spacing.l,
  borderRadius: theme.borderRadii.m,
};

const showSuccessToast = (message: string, options?: ToastOptions) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    backgroundColor: theme.colors.surfaceSuccessSubdued,
    position: Toast.positions.BOTTOM,
    shadow: false,
    containerStyle,
    textStyle: {
      fontFamily: theme.textVariants["body-m"].fontFamily,
    },
    ...options,
  });
};

const showErrorToast = (message: string, options?: ToastOptions) => {
  Toast.show(
    (
      <View flexDirection="row" alignItems="center" g="m">
        <Icon
          size={24}
          name="alert-circle"
          color={theme.colors.textOnPrimary}
        />
        <Text variant="body-m" color="textOnPrimary">
          {message}
        </Text>
      </View>
    ) as unknown as string,
    {
      duration: Toast.durations.LONG,
      backgroundColor: theme.colors.backgroundDarkest,
      position: Toast.positions.BOTTOM,
      shadow: false,
      containerStyle,
      ...options,
    },
  );
};

export default {
  showSuccessToast,
  showErrorToast,
};
