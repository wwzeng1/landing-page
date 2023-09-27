import React, { useState } from 'react';
import Particles from 'react-particles-js';

const Fireworks = () => {
    const [particles, setParticles] = useState(false);
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
        setParticles(true);
    };

    return (
        <Particles 
            params={particlesOptions} 
            onClick={handleClick} 
            particles={particles}
        />
    );
};

export default Fireworks;
