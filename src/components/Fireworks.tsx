import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';

const Fireworks = () => {
  useEffect(() => {
    tsParticles.load('fireworks-container', {
      particles: {
        number: {
          value: 100,
        },
        move: {
          enable: true,
          speed: 5,
        },
        split: {
          value: 3,
        },
      },
    });
  }, []);

  return <div id="fireworks-container" />;
};

export default Fireworks;
