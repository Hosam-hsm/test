import "ts-node/register";
import { ConfigContext, ExpoConfig } from "expo/config";

const getBundleId = (name: string) => {
  if (process.env.APP_VARIANT === "production") {
    return `com.${name.replaceAll(" ", "")}.app`;
  }
  if (process.env.APP_VARIANT === "staging") {
    return `com.${name.replaceAll(" ", "")}.app.staging`;
  }
  return `com.${name.replaceAll(" ", "")}.app.dev`;
};

const getAppName = (name: string) => {
  if (process.env.APP_VARIANT === "production") {
    return name;
  }
  if (process.env.APP_VARIANT === "staging") {
    return `${name} (Staging)`;
  }
  return `${name} (Dev)`;
};

const getGoogleServicesFile = () => {
  if (process.env.APP_VARIANT === "production") {
    return process.env.GOOGLE_SERVICES_JSON;
  }
  if (process.env.APP_VARIANT === "staging") {
    return process.env.GOOGLE_SERVICES_JSON_STAGING;
  }
  return process.env.GOOGLE_SERVICES_JSON_DEV;
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: getAppName(config.name),
  slug: config.name.replaceAll(" ", "-"),
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: getBundleId(config.name),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getBundleId(config.name),
    googleServicesFile: getGoogleServicesFile(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  experiments: {
    typedRoutes: true,
  },
  scheme: config.name.replaceAll(" ", "").toLocaleLowerCase(),
  plugins: [
    "expo-router",
    "expo-secure-store",
    "expo-font",
    [
      "@sentry/react-native/expo",
      {
        organization: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
      },
    ],
  ],
  extra: {
    router: {
      origin: false,
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
