import React, { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: any[] = [];

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // logic to draw particles
      });

      requestAnimationFrame(animate);
    };

    canvas.addEventListener("click", (event: MouseEvent) => {
      // logic to create particles at event.x, event.y
    });

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Fireworks;
