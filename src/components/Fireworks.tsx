import React, { MouseEvent } from 'react';
import Particles from 'react-particles-js';

interface FireworksProps {
  numberOfParticles: number;
  speed: number;
  color: string;
}

const Fireworks: React.FC<FireworksProps> = ({ numberOfParticles, speed, color }) => {
  const handleClick = (event: MouseEvent) => {
    // Logic to trigger fireworks effect on click
  };

  return (
    <Particles
      params={{
        particles: {
          number: { value: numberOfParticles },
          color: { value: color },
          line_linked: {
            enable: false,
          },
          move: {
            speed: speed,
            out_mode: 'out',
          },
          shape: {
            type: ['circle', 'edge'],
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
      onClick={handleClick}
    />
  );
};

export default Fireworks;
