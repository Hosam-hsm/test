import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  ResponsiveValue,
  SpacingProps,
  VariantProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  createBox,
  createVariant,
  layout,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import { Theme } from "@theme";
import React from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, "containerVariants">;

const variant = createVariant<Theme, "containerVariants">({
  themeKey: "containerVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
  variant,
]);

type Props = RestyleProps & {
  children: React.ReactNode;
  keyboardAvoidingViewProps?: React.ComponentProps<typeof KeyboardAvoidingView>;
  safeAreaViewProps?: SafeAreaViewProps;
} & React.ComponentProps<typeof SafeAreaView> &
  React.ComponentProps<typeof ScrollView>;

const SafeAreaViewBox = createBox<Theme, SafeAreaViewProps>(SafeAreaView);
const ScrollViewBox = createBox<Theme, ScrollViewProps>(ScrollView);
const KeyboardAvoidViewBox = createBox<Theme, KeyboardAvoidingViewProps>(
  KeyboardAvoidingView,
);

type defaultPaddingType = ResponsiveValue<
  keyof Theme["spacing"],
  Theme["breakpoints"]
>;
const defaultPadding: defaultPaddingType = "3xl";

const Container = ({
  children,
  keyboardAvoidingViewProps,
  safeAreaViewProps,
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  if (rest.variant === "keyboardAvoidScrollView") {
    return (
      <SafeAreaViewBox
        edges={[]}
        flex={1}
        bg="background"
        {...safeAreaViewProps}
      >
        <KeyboardAvoidViewBox
          keyboardVerticalOffset={Platform.OS === "android" ? 24 : 0}
          flex={1}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          bg="background"
          {...keyboardAvoidingViewProps}
        >
          <ScrollViewBox
            padding={defaultPadding}
            pb="none"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            {...props}
          >
            {children}
          </ScrollViewBox>
        </KeyboardAvoidViewBox>
      </SafeAreaViewBox>
    );
  }

  if (rest.variant === "scrollview") {
    return (
      <SafeAreaViewBox
        edges={[]}
        flex={1}
        bg="background"
        {...safeAreaViewProps}
      >
        <ScrollViewBox
          showsVerticalScrollIndicator={false}
          padding={defaultPadding}
          bg="background"
          {...props}
        >
          {children}
        </ScrollViewBox>
      </SafeAreaViewBox>
    );
  }

  return (
    <SafeAreaViewBox
      edges={[]}
      flex={1}
      padding={defaultPadding}
      bg="background"
      {...props}
    >
      {children}
    </SafeAreaViewBox>
  );
};
export default Container;
