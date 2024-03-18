import "expo-dev-client";
import { ApolloProvider } from "@apollo/client";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import useNetInfo from "@hooks/useNetinfo";
import * as Sentry from "@sentry/react-native";
import client from "@services/graphql/client";
import { ThemeProvider } from "@shopify/restyle";
import { darkTheme, theme } from "@theme";
import { useFonts } from "expo-font";
import { Slot, useNavigationContainerRef } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: false,
  enabled: process.env.APP_VARIANT === "production",
  environment: process.env.APP_VARIANT,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  useNetInfo();
  const ref = useNavigationContainerRef();
  const isDarkMode = useColorScheme() === "dark";

  const [fontsLoaded] = useFonts({
    IcoMoon: require("../../assets/icomoon/fonts/icomoon.ttf"),
    "Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
  });

  const hideSplash = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded) {
      hideSplash();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (ref && fontsLoaded) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
  }, [ref, fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <RootSiblingParent>
        <ApolloProvider client={client}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Slot />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </ApolloProvider>
      </RootSiblingParent>
    </ThemeProvider>
  );
}

export default Sentry.wrap(RootLayout);
