import { theme, themeDark } from "@learn/theme";
import { DripsyProvider } from "dripsy";
import { useColorScheme } from "react-native";
import Navigation from "./navigation";

const App: React.FC = () => {
  const colorMode = useColorScheme();
  console.log({ colorMode });
  return (
    <DripsyProvider theme={colorMode === "dark" ? themeDark : theme}>
      <Navigation />
    </DripsyProvider>
  );
};

export default App;
