import React from "react";
const Pricing = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div onClick={handleClick}>
      <h1>Pricing</h1>
    </div>
  );
};

export default Pricing;
