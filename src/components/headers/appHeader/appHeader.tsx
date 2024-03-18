import Icon from "@components/icon";
import { Text, Touchable, View } from "@components/restyled";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@theme";
import Constants from "expo-constants";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AppHeader = (props: NativeStackHeaderProps | DrawerHeaderProps) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme<Theme>();

  return (
    <View
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="xml"
      bg="background"
      style={{
        paddingTop: insets.top,
      }}
    >
      <Touchable
        onPress={() => {
          props.navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Icon name="menu" size={24} color={colors.actionPrimary} />
      </Touchable>

      <Text>{Constants.expoConfig.name}</Text>

      <Link href="/(authenticated)/(dashboard)/notification" asChild>
        <Touchable>
          <Icon name="bell" size={24} color={colors.actionPrimary} />
        </Touchable>
      </Link>
    </View>
  );
};

export default AppHeader;
