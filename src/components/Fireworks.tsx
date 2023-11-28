import React, { useState } from 'react';
import Particles from 'react-particles-js';

const Fireworks = () => {
    const [fireworks, setFireworks] = useState(false);

    const handleClick = () => {
        setFireworks(true);
        setTimeout(() => setFireworks(false), 2000);
    };

    return (
        <div onClick={handleClick}>
            {fireworks && (
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
                                direction: "top",
                                speed: 1
                            },
                            opacity: {
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.05
                                }
                            }
                        },
                        interactivity: {
                            events: {
                                onclick: {
                                    enable: true,
                                    mode: "push"
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
            )}
        </div>
    );
};

export default Fireworks;
