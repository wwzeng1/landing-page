import React from 'react';
import Particles from 'react-particles-js';

const Fireworks = () => {
    const particlesOptions = {
        particles: {
            number: {
                value: 100
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    };

    const handleClick = () => {
        // Logic to trigger fireworks particles
    };

    return (
        <Particles 
            params={particlesOptions} 
            onClick={handleClick} 
        />
    );
};

export default Fireworks;
