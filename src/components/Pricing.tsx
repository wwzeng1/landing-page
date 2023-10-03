import React, { useState } from "react";

const Pricing: React.FC = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleClick = () => {
    setShowFireworks(true);
  };

  return <div onClick={handleClick}>{/* Pricing information goes here */}</div>;
};

export default Pricing;
