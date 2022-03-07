import { theme, themeDark } from "@learn/theme";
import { DripsyProvider } from "dripsy";
import type { AppProps } from "next/app";
import "raf/polyfill";
import { useColorScheme } from "react-native";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const colorMode = useColorScheme();
  return (
    <DripsyProvider theme={colorMode === "dark" ? themeDark : theme} ssr>
      <Component {...pageProps} />
    </DripsyProvider>
  );
};

export default App;
