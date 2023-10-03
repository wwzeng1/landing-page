import React from 'react';
import Particles from 'particles.js';

const PricingPage: React.FC = () => {
    const triggerFireworks = () => {
        Particles.init({
            selector: '.fireworks',
            maxParticles: 200,
            color: ['#DA4453', '#16A085', '#F2A35E'],
            connectParticles: false,
            responsive: [
                {
                    breakpoint: 800,
                    options: {
                        maxParticles: 80,
                        color: '#48F2E3',
                        connectParticles: false
                    }
                }
            ]
        });
    };

    return (
        <div className="pricing-page" onClick={triggerFireworks}>
            {/* Pricing page content goes here */}
        </div>
    );
};

export default PricingPage;
