import React, { useEffect, useRef } from 'react';
import Particles from 'particles.js';

interface FireworksProps {
  isActive: boolean;
}

const Fireworks: React.FC<FireworksProps> = ({ isActive }) => {
  const container = useRef(null);

  useEffect(() => {
    if (isActive) {
      Particles.init({
        selector: container.current,
        maxParticles: 100,
        color: '#FF0000',
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              color: '#48F2E3',
              connectParticles: false
            }
          }
        ]
      });
    } else {
      Particles.pJS.fn.vendors.destroypJS();
    }
  }, [isActive]);

  return <div ref={container} />;
};

export default Fireworks;
