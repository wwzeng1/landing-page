import React, { useState } from 'react';
import Fireworks from './Fireworks';

const PricingPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div onClick={handleClick}>
      {/* Other components and elements */}
      <Fireworks isActive={isActive} />
    </div>
  );
};

export default PricingPage;
