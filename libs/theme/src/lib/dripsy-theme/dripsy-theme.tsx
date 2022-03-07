// https://www.dripsy.xyz/usage/theming/create
import { makeTheme } from "dripsy";
import { Platform } from "react-native";

const spaceSize = 4;
const fontSize = 12;

const lightColors = { $text: "#000", $background: "#fff", $primary: "tomato" };

const theme = makeTheme({
  types: {
    onlyAllowThemeValues: "always",
  },
  colors: lightColors,
  shadows: {
    md: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  fonts: {
    $body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    $heading: "Georgia, serif",
    $monospace: "Menlo, monospace",
  },
  space: {
    $0: 0,
    $1: spaceSize,
    $2: spaceSize * 2,
    $3: spaceSize * 3,
    $4: spaceSize * 4,
    $5: spaceSize * 5,
    $6: spaceSize * 6,
    $7: spaceSize * 7,
  },
  fontSizes: {
    $0: fontSize,
    $1: fontSize * 1.1666,
    $2: fontSize * 1.1666 * 1.1666,
    $3: fontSize * 1.1666 * 1.1666 * 1.1666,
    $4: fontSize * 1.1666 * 1.1666 * 1.1666 * 1.1666,
    $5: fontSize * 1.1666 * 1.1666 * 1.1666 * 1.1666 * 1.1666,
    $6: fontSize * 1.1666 * 1.1666 * 1.1666 * 1.1666 * 1.1666 * 1.1666,
  },
  text: {
    h1: {
      fontSize: "$2",
    },
    p: {
      fontSize: "$0",
      mb: "$3",
    },
  },
  textShadows: {
    onImage: {
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      textShadowColor: "#00000099",
    },
  },
  breakpoints: Platform.select({
    native: ["391px", "845px"],
    web: ["600px", "1200px"],
  }),
});

type MyTheme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

const darkColors: typeof lightColors = {
  $text: "#000",
  $background: "#fff",
  $primary: "blue",
};

const themeDark = {
  ...theme,
  colors: darkColors,
};

export { theme, themeDark };
