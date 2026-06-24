import { useEffect, useRef } from 'react';

/**
 * ParticleBackground
 * A lightweight canvas particle field with connecting lines that subtly react
 * to the mouse. No external dependency — uses requestAnimationFrame and cleans
 * itself up. Disabled for users who prefer reduced motion.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, particles, animationId;
    const mouse = { x: -9999, y: -9999 };

    const COLORS = ['rgba(124,92,255,', 'rgba(34,211,238,', 'rgba(244,114,182,'];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Particle count scales with screen size (capped for performance)
      const count = Math.min(Math.floor((width * height) / 18000), 90);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + '0.9)';
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.c + (0.12 * (1 - dist / 130)).toFixed(3) + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // React to mouse — gentle attraction
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.c + (0.18 * (1 - md / 160)).toFixed(3) + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
    />
  );
}
