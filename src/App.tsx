import { ChakraProvider, Box, Grid, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import CallToAction from "./components/CallToAction";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export const App = () => (
  <>
    <Helmet></Helmet>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <CallToAction />
      </Box>
    </ChakraProvider>
  </>
);
