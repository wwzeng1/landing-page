import React, { useEffect, useRef } from 'react';
import { tsParticles } from "tsparticles";
import { Box } from '@chakra-ui/react';

interface FireworksProps {
  speed: number;
  splitCount: number;
}

const Fireworks: React.FC<FireworksProps> = ({ speed, splitCount }) => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: false,
              speed: 3,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1 },
            animation: {
              enable: false,
              speed: 20,
              minimumValue: 0.1,
              sync: true
            }
          },
          move: {
            enable: true,
            speed: speed,
            direction: "none",
            random: false,
            straight: false,
            outMode: "out",
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "split",
              nb: splitCount
            },
            resize: true
          },
          modes: {
            split: {
              particles_nb: splitCount
            }
          }
        },
        retina_detect: true,
        background: {
          color: "#000000",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      });
    }
  }, [speed, splitCount]);

  return (
    <Box ref={particlesRef} />
  );
};

export default Fireworks;
