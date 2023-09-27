import React from 'react';
import Particles from 'react-particles-js';

const FireworksParticles: React.FC = () => {
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
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
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
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default FireworksParticles;
