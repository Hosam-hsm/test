import { createTheme } from "@shopify/restyle";

const palette = {
  brand: {
    blue: {
      one: "#E9F4FF",
      two: "#C6DAF9",
      three: "#5882E0",
      four: "#2338CE",
      five: "#1B238C",
      six: "#0C0C5B",
      seven: "#0A0A4C",
      eight: "#08083D",
      nine: "#06062E",
      ten: "#04041E",
    },
    cyan: {
      one: "#F8FDFD",
      two: "#EBF9F8",
      three: "#D7F3F2",
      four: "#C3EDEB",
      five: "#AFE7E4",
      six: "#79D7D2",
      seven: "#49C4C1",
      eight: "#299499",
      nine: "#1E6166",
      ten: "#082D33",
    },
    red: {
      one: "#FEF4F4",
      two: "#FFDCDC",
      three: "#FFC2C2",
      four: "#FFA8A8",
      five: "#FA8383",
      six: "#E42525",
      seven: "#C22217",
      eight: "#9A1C14",
      nine: "#750C05",
      ten: "#4E0602",
    },
    accent: {
      one: "#FCFDF0",
      two: "#F7FAD3",
      three: "#EEF4A8",
      four: "#E6EF7C",
      five: "#DDE951",
      six: "#D5E425",
      seven: "#A4BC19",
      eight: "#768D17",
      nine: "#4A5B0B",
      ten: "#222D09",
    },
  },
  neutral: {
    light: {
      one: "#FFFFFF",
      two: "#F8F9FA",
      three: "#F3F3F3",
      four: "#E2E4E8",
      five: "#C5C8D0",
      six: "#A8ADB9",
    },
    dark: {
      one: "#8B92A1",
      two: "#6F7789",
      three: "#515764",
      four: "#343840",
      five: "#25282E",
      six: "#16181B",
      seven: "#000000",
    },
  },
  support: {
    success: {
      one: "#D7F3F2",
      two: "#0DCCA7",
      three: "#00604E",
    },
    warning: {
      one: "#FEF5C7",
      two: "#E8AE09",
      three: "#B47B09",
    },
    error: {
      one: "#FEE4E2",
      two: "#EF5544",
      three: "#B92C1C",
    },
  },
};

const theme = createTheme({
  colors: {
    // Surface colors
    surface: palette.neutral.light.one,
    surfaceSubdued: palette.neutral.light.two,
    surfaceLightest: palette.neutral.light.four,
    background: palette.neutral.light.one,
    backgroundDarkest: palette.neutral.dark.seven,

    // On surface colors
    textDarkest: palette.neutral.dark.seven,
    textDark: palette.neutral.dark.six,
    text: palette.neutral.dark.five,
    textLight: palette.neutral.dark.four,
    textLighter: palette.neutral.dark.two,
    textLightest: palette.neutral.dark.one,
    textOnSubduedSurface: palette.neutral.dark.three,
    borderDark: palette.neutral.light.six,
    border: palette.neutral.light.five,
    borderLight: palette.neutral.light.four,
    borderLightest: palette.neutral.light.three,

    // Primary colors
    actionDark: palette.brand.blue.ten,
    actionLight: palette.brand.blue.seven,
    actionPrimary: palette.brand.blue.five,
    actionLightest: palette.brand.blue.one,
    textOnPrimary: palette.neutral.light.one,

    // Secondary colors
    actionSecondary: palette.brand.red.six,

    // Interactive colors
    focused: palette.brand.blue.four,
    surfaceSelected: palette.brand.blue.two,

    // Success colors
    surfaceSuccess: palette.support.success.three,
    surfaceSuccessSubdued: palette.support.success.two,

    // Warning colors
    surfaceWarning: palette.support.warning.three,
    surfaceWarningSubdued: palette.support.warning.two,
    surfaceWarningLightest: palette.support.warning.one,

    // Critical colors
    surfaceCritical: palette.support.error.three,
    surfaceCriticalSubdued: palette.support.error.two,
    surfaceCriticalLightest: palette.brand.red.one,

    // Highlight colors
    // surfaceHighlightSubdued: '',

    // Decorative colors
    decorativeCyan: palette.brand.cyan.six,
    decorativeBlue: palette.brand.blue.six,
    decorativeRed: palette.brand.red.six,
    decorativeLightRed: palette.brand.red.five,
    loadingBlue: palette.brand.blue.three,
  },
  spacing: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 6,
    m: 8,
    l: 10,
    xl: 12,
    xsl: 14,
    xml: 16,
    xxl: 20,
    "3xl": 24,
    "4xl": 28,
    "5xl": 32,
    "6xl": 40,
    "7xl": 48,
    "8xl": 56,
    "9xl": 60,
    "10xl": 70,
  },
  breakpoints: {
    base: 0,
    sm: 360,
    md: 390,
    lg: 414,
    xl: 428,
  },
  borderRadii: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 6,
    m: 8,
    l: 10,
    xl: 12,
    xml: 16,
    xxl: 20,
    "3xl": 24,
    "4xl": 28,
    "100": 100,
  },
  zIndices: {
    "10": 10,
  },
  textVariants: {
    //heading
    "heading-d1": {
      fontSize: 36,
      fontFamily: "Inter-Black",
      color: "text",
    },
    "heading-h1": {
      fontSize: 24,
      fontFamily: "Inter-Black",
    },
    "heading-h2": {
      fontSize: 18,
      fontFamily: "Inter-Black",
    },
    "heading-h3": {
      fontSize: 16,
      fontFamily: "Inter-Black",
    },
    "heading-h4": {
      fontSize: 14,
      fontFamily: "Inter-ExtraBold",
    },
    "heading-h5": {
      fontSize: 12,
      fontFamily: "Inter-Bold",
    },

    //body
    "body-xl": {
      fontSize: 18,
      fontFamily: "Inter-Regular",
    },
    "body-l": {
      fontSize: 16,
      fontFamily: "Inter-Regular",
    },
    "body-l-bold": {
      fontSize: 16,
      fontFamily: "Inter-Bold",
    },
    "body-m": {
      fontSize: 14,
      fontFamily: "Inter-Regular",
    },
    "body-s-bold": {
      fontSize: 12,
      fontFamily: "Inter-Bold",
    },
    "body-s": {
      fontSize: 12,
      fontFamily: "Inter-Regular",
    },
    "body-xs-bold": {
      fontSize: 10,
      fontFamily: "Inter-Bold",
    },
    "body-xs": {
      fontSize: 10,
      fontFamily: "Inter-Regular",
    },
    "body-xxs": {
      fontSize: 8,
      fontFamily: "Inter-Medium",
    },
    "body-xxs-semiBold": {
      fontSize: 8,
      fontFamily: "Inter-SemiBold",
    },

    //action
    "action-l": {
      fontSize: 14,
      fontFamily: "Inter-SemiBold",
    },
    "action-m-semiBold": {
      fontSize: 12,
      fontFamily: "Inter-SemiBold",
    },
    "action-m-extraBold": {
      fontSize: 12,
      fontFamily: "Inter-ExtraBold",
    },
    "action-s": {
      fontSize: 10,
      fontFamily: "Inter-SemiBold",
    },

    //caption
    "caption-m-extraBold": {
      fontSize: 10,
      fontFamily: "Inter-ExtraBold",
    },
    "caption-m-semiBold": {
      fontSize: 10,
      fontFamily: "Inter-SemiBold",
    },
    "caption-m-Bold": {
      fontSize: 10,
      fontFamily: "Inter-Bold",
    },
    "caption-s": {
      fontSize: 8,
      fontFamily: "Inter-Bold",
    },

    defaults: {
      // We can define a default text variant here.
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: "actionPrimary",
      borderRadius: "xl",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: "xl",
      paddingHorizontal: "xml",
      flexDirection: "row",
      gap: "m",
      minHeight: 44,
    },
    secondary: {
      backgroundColor: "background",
      borderWidth: 1.5,
      borderColor: "actionPrimary",
    },
  },
  inputVariants: {
    defaults: {
      height: 48,
      borderWidth: 1,
      borderColor: "border",
      borderRadius: "xl",
      paddingVertical: "xl",
      paddingHorizontal: "xml",
      color: "text",
      fontSize: 14,
      fontFamily: "Inter-Regular",
    },
  },
  containerVariants: {
    defaults: {},
    scrollview: {},
    keyboardAvoidScrollView: {},
  },
  touchableVariants: {
    defaults: {},
  },
});

type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};

export { theme, darkTheme };
export type { Theme };
