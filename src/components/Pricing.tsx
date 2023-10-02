import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Particles from 'react-particles-js';

const Pricing = () => {
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 2000); // Stop the effect after 2 seconds
  };

  return (
    <Box position="relative" onClick={handleClick}>
      {showParticles && (
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
      {/* Rest of the pricing page content */}
    </Box>
  );
};

export default Pricing;
