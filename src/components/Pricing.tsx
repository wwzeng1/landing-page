import React, { useState } from 'react';
import FireworksParticles from './FireworksParticles';

const Pricing = () => {
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setShowParticles(!showParticles);
  };

  return (
    <div>
      {showParticles && <FireworksParticles />}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Pricing;
      {/* Rest of the component */}
    </div>
  );
};

export default Pricing;
