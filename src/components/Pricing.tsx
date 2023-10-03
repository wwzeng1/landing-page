import React from 'react';
import Particles from 'react-particles-js';

const Pricing = () => {
  const triggerFireworks = () => {
    Particles.start({
      particles: {
        number: {
          value: 100,
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
          direction: "top",
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
    });
  };

  return (
    <div>
      <button onClick={triggerFireworks}>Click me for fireworks!</button>
      <Particles />
    </div>
  );
};

export default Pricing;
