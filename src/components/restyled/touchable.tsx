import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
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
  useTheme,
} from "@shopify/restyle";
import React, { forwardRef, useRef } from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

import { Theme } from "../../theme/index";

const BOUNCE_RATE = 1000;
const useDebounce = () => {
  const busy = useRef(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounce = async (callback: any) => {
    setTimeout(() => {
      busy.current = false;
    }, BOUNCE_RATE);

    if (!busy.current) {
      busy.current = true;
      callback();
    }
  };

  return { debounce };
};

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  VariantProps<Theme, "touchableVariants">;

const variant = createVariant<Theme, "touchableVariants">({
  themeKey: "touchableVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  layout,
  variant,
]);

export type TouchableProps = RestyleProps & {
  children: React.ReactNode;
  withDebounce?: boolean;
  onPress?: () => void;
} & React.ComponentProps<typeof TouchableOpacity>;

const TouchableBox = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

const Touchable = (
  { children, withDebounce = false, onPress, ...rest }: TouchableProps,
  ref,
) => {
  const props = useRestyle(restyleFunctions, rest);
  const { spacing: themeSpacing } = useTheme<Theme>();
  const { debounce } = useDebounce();

  const onPressBtn = () => {
    if (withDebounce) {
      debounce(onPress);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableBox
      ref={ref}
      hitSlop={themeSpacing.xsl}
      activeOpacity={1}
      onPress={onPressBtn}
      {...props}
    >
      {children}
    </TouchableBox>
  );
};

const ForwardedTouchable = forwardRef(Touchable);

export default ForwardedTouchable;
