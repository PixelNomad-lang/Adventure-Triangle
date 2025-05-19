import { useEffect, useRef } from 'react';

const ParadoxBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let scale = 1;
    let direction = 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawParadox = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create impossible triangle (Penrose triangle)
      const size = Math.min(canvas.width, canvas.height) * 0.4 * scale;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 4;
      
      // Draw impossible geometry
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - size/2);
      ctx.lineTo(centerX + size/2, centerY + size/2);
      ctx.lineTo(centerX - size/2, centerY + size/2);
      ctx.closePath();
      ctx.stroke();
      
      // Add paradoxical elements
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.3, 0, Math.PI * 2);
      ctx.stroke();
      
      // Animate scaling
      scale += 0.005 * direction;
      if (scale > 1.2 || scale < 0.8) direction *= -1;
      
      animationId = requestAnimationFrame(drawParadox);
    };

    resizeCanvas();
    drawParadox();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
    />
  );
};

export default ParadoxBackground;