import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AboutUs: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>About Us</Text>
      <Text fontSize="lg">
        Sweep AI is a company dedicated to making software development easier and more efficient. 
        Our AI-powered tools help developers automate tasks, write better code, and deliver high-quality software faster.
      </Text>
    </Box>
  );
};

export default AboutUs;
