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
import Users from "./components/Users";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component

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
            minH="100vh"
            overflowX="hidden"
          >
            {false && <ColorModeSwitcher />}
            <Navbar />
            <Sidebar /> // Add the Sidebar component here
            <CallToAction />
            <Users />
            <Features />
            <Testimonials />
            <Conclusion />
          </Box>
        </ForceDarkMode>
      </ChakraProvider>
    </>
  );
};
