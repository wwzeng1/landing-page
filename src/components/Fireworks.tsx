import React, { useRef, useEffect } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // TODO: Implement fireworks animation using Canvas API
  }, [color, size, intensity]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { clientX, clientY } = event;

    // TODO: Trigger fireworks animation at (clientX, clientY)
  };

  return <Box as="canvas" ref={canvasRef} onClick={handleClick} />;
};

export default Fireworks;
