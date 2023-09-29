import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

interface FireworksProps {
  color?: string;
  size?: number;
  intensity?: number;
}

const Fireworks: React.FC<FireworksProps> = ({
  color = "white",
  size = 2,
  intensity = 100,
}) => {
  type Particle = {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let particles: Particle[] = [];
  let createParticle: (x: number, y: number) => void;

  useEffect(() => {
    canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x,
        y,
        size: Math.random() * size,
        speedX: Math.random() * intensity,
        speedY: Math.random() * intensity,
        color,
      };
      particles.push(particle);
    };
  });

  useEffect(() => {
    const animateParticles = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle: Particle, index: number) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.1;

        if (particle.size < 0.1) {
          particles.splice(index, 1);
        } else {
          if (ctx) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
          }
        }
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, [color, size, intensity]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = event;
    createParticle(clientX, clientY);
  };

  return <Box as="canvas" ref={canvasRef} onClick={handleClick} />;
};

export default Fireworks;
