import { useEffect, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${visible ? "visible" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <span className="cursor-dot"></span>
    </div>
  );
}

export default Cursor;