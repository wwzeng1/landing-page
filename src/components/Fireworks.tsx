import React from 'react';
import Particles from 'react-particles-js';

interface FireworksProps {
  isActive: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
          },
          color: {
            value: '#ff0000',
          },
          shape: {
            type: 'circle',
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 10,
            direction: 'top',
            out_mode: 'out',
          },
          size: {
            value: 10,
            random: true,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
            },
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
