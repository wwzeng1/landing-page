import React, { useState } from 'react';
import Fireworks from './Fireworks';

const Pricing: React.FC = () => {
  const [isDisplaying, setIsDisplaying] = useState(false);

  const handleClick = () => {
    setIsDisplaying(true);
    setTimeout(() => {
      setIsDisplaying(false);
    }, 3000);
  };

  return (
    <div onClick={handleClick}>
      <Fireworks
        color="#ff0000"
        size={3}
        speed={10}
        duration={3}
        isDisplaying={isDisplaying}
      />
      {/* Rest of the Pricing component */}
    </div>
  );
};

export default Pricing;
