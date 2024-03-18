import DashboardHeader from "@components/headers/appHeader/appHeader";
import { Text, Touchable, View } from "@components/restyled";
import useNotificationObserver from "@hooks/useNotificationObserver";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { clearStorageAndLogout } from "@services/graphql/client";
import tokenMethods from "@utils/tokenMethods";
import * as Application from "expo-application";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  useNotificationObserver();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ height: "100%" }}
    >
      <DrawerItemList {...props} />
      <View
        style={{ marginTop: "auto" }}
        padding="xl"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="3xl"
      >
        <Text variant="body-s" color="textLightest">
          Version: {Application.nativeApplicationVersion}
        </Text>
        <Touchable onPress={clearStorageAndLogout}>
          <Text variant="action-l" color="actionPrimary">
            Logout
          </Text>
        </Touchable>
      </View>
    </DrawerContentScrollView>
  );
}

export default function AppLayout() {
  const { accessToken } = tokenMethods.getTokens();

  if (!accessToken) {
    return <Redirect href="/(unauthenticated)/signIn" />;
  }

  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="(dashboard)"
        options={{
          drawerLabel: "Home",
          title: "My Expo App",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="privacyPolicy/index"
        options={{
          drawerLabel: "Privacy Policy",
          title: "privacy policy",
          header: (props) => <DashboardHeader {...props} />,
        }}
      />
    </Drawer>
  );
}
