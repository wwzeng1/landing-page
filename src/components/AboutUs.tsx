import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutUs: React.FC = () => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        About Us
      </Text>
      <Text>
        We are a tech company dedicated to providing the best AI solutions. Our
        team is composed of highly skilled and passionate individuals who strive
        to push the boundaries of what is possible with AI.
      </Text>
    </Box>
  );
};

export default AboutUs;
