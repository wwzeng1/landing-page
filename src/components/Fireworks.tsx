import React from 'react';
import Particles from 'react-particles-js';

interface FireworksProps {
  x: number;
  y: number;
}

const Fireworks: React.FC<FireworksProps> = ({ x, y }) => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: false
            }
          },
          size: {
            value: 10,
            random: true
          },
          move: {
            direction: "bottom",
            out_mode: "out"
          },
          line_linked: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "remove"
            }
          },
          modes: {
            remove: {
              particles_nb: 10
            }
          }
        }
      }}
      style={{
        position: 'absolute',
        top: y,
        left: x
      }}
    />
  );
};

export default Fireworks;
