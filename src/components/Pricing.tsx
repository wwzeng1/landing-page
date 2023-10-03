import React from 'react';
import React, { useState } from 'react';
import Particles from 'react-particles-js';

const Pricing = () => {
  const [fireworks, setFireworks] = useState(false);
  
  const triggerFireworks = () => {
    setFireworks(true);
  };

  return (
    <div>
      <button onClick={triggerFireworks}>Click me for fireworks!</button>
      {fireworks && (
        <Particles
          params={{
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
          }}
        />
      )}
    </div>
  );
};

export default Pricing;
