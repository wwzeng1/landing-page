import React from 'react';
import Particles from 'react-particles-js';

const Fireworks = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          color: {
            value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
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
