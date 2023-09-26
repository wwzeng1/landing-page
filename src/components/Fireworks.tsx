import React from 'react';
import Particles from 'react-particles-js';

interface FireworksProps {
  trigger: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ trigger }) => {
  if (!trigger) {
    return null;
  }

  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 3,
          },
          line_linked: {
            enable: false,
          },
          color: {
            value: '#ff0000',
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
};

export default Fireworks;
