import React, { useEffect, useRef } from 'react';
import { fireworks } from 'tsParticles';

const PricingPage: React.FC = () => {
  const fireworksRef = useRef<fireworks.Fireworks | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fireworksRef.current = new fireworks.Fireworks({
      speed: 5,
      splitCount: 10,
    });

    const handleClick = () => {
      if (fireworksRef.current) {
        fireworksRef.current.play();
      }
    };

    if (rootRef.current) {
      rootRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (rootRef.current) {
        rootRef.current.removeEventListener('click', handleClick);
      }

      if (fireworksRef.current) {
        fireworksRef.current.stop();
        fireworksRef.current = null;
      }
    };
  }, []);

  return <div ref={rootRef}>Pricing Page Content</div>;
};

export default PricingPage;
