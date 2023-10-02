import React from 'react';
import Particles from 'react-particles-js';

const Fireworks = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 50,
                    },
                    size: {
                        value: 3,
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0,
                        },
                        repulse: {
                            distance: 400,
                            duration: 4,
                        },
                    },
                },
            }}
        />
    );
};

export default Fireworks;
