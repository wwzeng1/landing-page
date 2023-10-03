import React from 'react';
import Particles from 'react-particles-js';

const Fireworks: React.FC = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100
                    },
                    size: {
                        value: 3
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 10,
                        out_mode: 'out'
                    },
                    shape: {
                        type: [
                            'circle',
                            'triangle',
                            'polygon'
                        ],
                    },
                    color: {
                        value: '#FF0000'
                    },
                    opacity: {
                        value: 0.9,
                        random: true
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: 'push'
                        }
                    },
                    modes: {
                        push: {
                            particles_nb: 1
                        }
                    }
                },
                retina_detect: true
            }}
        />
    );
}

export default Fireworks;
