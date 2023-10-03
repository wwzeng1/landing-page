import React from 'react';
import Particles from 'react-particles-js';

interface FireworksProps {
  color: string;
  size: number;
  speed: number;
  duration: number;
  isDisplaying: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ color, size, speed, duration, isDisplaying }) => {
  if (!isDisplaying) {
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
            value: color,
          },
          size: {
            value: size,
          },
          move: {
            speed: speed,
          },
          life: {
            duration: duration,
          },
        },
      }}
    />
  );
};

export default Fireworks;
