import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body, button, a, input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ marginLeft: "-2px", marginTop: "-2px" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 2L18 13.5L11.5 13.5L15 21L12 22L8.5 14.5L2.5 19.5L5.5 2Z"
            fill="#FB7185"
            stroke="black"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
