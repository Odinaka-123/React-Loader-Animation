"use client";
import { useEffect, useRef, useState } from "react";

export default function GooeyCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({
    mouseX: 0,
    mouseY: 0,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const [hovering, setHovering] = useState(false);

  const circleSize = 16;

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current.mouseX = e.clientX;
      posRef.current.mouseY = e.clientY;

      if (
        e.target.closest("a, button, input, textarea, img, svg, [data-hoverable]")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const speed = 0.07; // smaller = more delay / more rubbery
    const animate = () => {
      const p = posRef.current;

      // Smoothly interpolate towards mouse position
      p.x += (p.mouseX - p.x) * speed;
      p.y += (p.mouseY - p.y) * speed;

      const vx = p.x - p.lastX;
      const vy = p.y - p.lastY;
      const velocity = Math.sqrt(vx * vx + vy * vy);

      const stretch = 1 + velocity / 80;
      const squash = 1 / stretch;

      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${p.x - circleSize / 2}px, ${p.y - circleSize / 2}px)
          rotate(${angle}deg)
          scaleX(${stretch})
          scaleY(${squash})
        `;
      }

      p.lastX = p.x;
      p.lastY = p.y;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
    >
      <div
        className="rounded-full transition-colors duration-200 ease-out"
        style={{
          width: circleSize,
          height: circleSize,
          backgroundColor: hovering ? "white" : "rgba(255,255,255,0.8)",
        }}
      />
    </div>
  );
}
