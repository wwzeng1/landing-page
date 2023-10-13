import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';

const FireworksParticles = () => {
  useEffect(() => {
    tsParticles.load('particles', {
      particles: {
        size: {
          value: 80,
          random: { enable: true, minimumValue: 60 },
          animation: {
            enable: true,
            speed: 80,
            minimumValue: 60,
            sync: false,
            startValue: 'max',
            destroy: 'min'
          }
        },
        move: {
          enable: true,
          speed: 80,
          direction: 'none',
          random: false,
          straight: false,
          outMode: 'out',
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      }
    });
  }, []);

  return <div id="particles"></div>;
};

export default FireworksParticles;
