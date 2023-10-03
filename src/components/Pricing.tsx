import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import particlesJS from 'particles.js';

const Pricing = () => {
  useEffect(() => {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  const handleClick = () => {
    particlesJS.start();
  };

  return (
    <Box id="particles-js" onClick={handleClick}>
      {/* Pricing page content goes here */}
    </Box>
  );
};

export default Pricing;
