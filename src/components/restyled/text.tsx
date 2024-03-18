import {
  ColorProps,
  SpacingProps,
  SpacingShorthandProps,
  TypographyProps,
  VariantProps,
  color,
  composeRestyleFunctions,
  createBox,
  createVariant,
  spacing,
  spacingShorthand,
  typography,
  useRestyle,
} from "@shopify/restyle";
import { Theme } from "@theme";
import React from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  VariantProps<Theme, "textVariants"> &
  ColorProps<Theme> &
  SpacingShorthandProps<Theme> &
  TypographyProps<Theme>;

const variant = createVariant<Theme, "textVariants">({
  themeKey: "textVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  variant,
  color,
  spacingShorthand,
  typography,
]);

export type TextProps = RestyleProps & {
  children: React.ReactNode;
  shouldTruncate?: boolean;
} & React.ComponentProps<typeof NativeText>;

const TextBox = createBox<Theme, NativeTextProps>(NativeText);

const Text = ({ children, shouldTruncate, ...rest }: TextProps) => {
  const props = useRestyle(restyleFunctions, rest);
  return <TextBox {...props}>{children}</TextBox>;
};

export default Text;
