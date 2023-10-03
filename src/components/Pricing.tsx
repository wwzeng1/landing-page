import React from 'react';
import Fireworks from './Fireworks';

const Pricing: React.FC = () => {
    const handleClick = () => {
        // Trigger fireworks particles
    };

    return (
        <div onClick={handleClick}>
            {/* Pricing information goes here */}
            <Fireworks />
        </div>
    );
};

export default Pricing;
