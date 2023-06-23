import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import ogimage from "./assets/ogimage.png";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Examples from "./components/Examples";
import Users from "./components/Users";

import circles from "./assets/circles.svg";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function ForceDarkMode(props: { children: JSX.Element }) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return props.children;
}

export const App = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <ChakraProvider theme={theme}>
        <ForceDarkMode>
          <Box
            textAlign="center"
            fontSize="xl"
            bgColor="#0d0a1a"
            // bgGradient="radial-gradient(ellipse at top, #382A65, transparent)"
            bgImage={circles}
            bgPos="0 0"
            bgSize="100%"
            minH="100vh"
            bgRepeat="no-repeat"
          // backgroundAttachment="fixed"
          >
            {false && <ColorModeSwitcher />}
            <Navbar />
            <CallToAction />
            <Examples />
            <Testimonials />
            <Users />
            <Footer />
          </Box>
        </ForceDarkMode>
      </ChakraProvider>
    </>
  );
};
