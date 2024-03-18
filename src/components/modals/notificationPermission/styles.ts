import { useTheme } from "@shopify/restyle";
import { Theme } from "@theme";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const { spacing, colors, borderRadii } = useTheme<Theme>();

  return StyleSheet.create({
    sheetContainer: {
      marginHorizontal: spacing["3xl"],
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: colors.background,
      borderRadius: borderRadii.m,
    },
    main: {
      gap: spacing.xml,
      paddingHorizontal: spacing.xml,
      paddingTop: spacing.xml,
      paddingBottom: spacing["3xl"],
      alignItems: "center",
    },
    image: {
      height: 150,
      width: 150,
    },
  });
};

export default useStyles;
