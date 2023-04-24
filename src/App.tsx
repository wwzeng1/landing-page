import {
  ChakraProvider,
  Box,
  extendTheme,
  // useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ogimage from "./assets/ogimage.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { useEffect } from "react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const App = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // useEffect(() => {
  //   if (colorMode === "light") {
  //     toggleColorMode();
  //   }
  // }, [colorMode, toggleColorMode]);
  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          {false && <ColorModeSwitcher />}
          <Navbar />
          <CallToAction />
        </Box>
      </ChakraProvider>
    </>
  );
};
