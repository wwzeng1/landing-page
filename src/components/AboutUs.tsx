import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutUs: React.FC = (): JSX.Element => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={2}>
        About Us
      </Text>
      <Text>
        Sweep AI is a platform that automates the process of writing tests for
        your code. Our AI-powered bot, Sweep, can write tests for your code
        based on the specifications you provide. This allows you to focus on
        writing code and let Sweep handle the testing.
      </Text>
    </Box>
  );
};

export default AboutUs;
