import React, { useEffect, useRef } from "react";

import FireworksLibrary from 'fireworks-library';

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");

      const handleClick = (event: MouseEvent) => {
        FireworksLibrary.createFireworks(event.clientX, event.clientY, context);
      };

      canvas.addEventListener("click", handleClick);

      return () => {
        canvas.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Fireworks;
