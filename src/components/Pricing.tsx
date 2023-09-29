import React from 'react';
import { Box } from '@chakra-ui/react';
import Fireworks from './Fireworks';

const Pricing: React.FC = () => {
  return (
    <Fireworks color="white" size={2} intensity={100}>
      <Box>
        {/* Rest of the pricing page content */}
      </Box>
    </Fireworks>
  );
};

export default Pricing;
