import React, { useEffect, useState } from "react";
import { CursorStyle } from "./cursorStyle";

const Cursor1 = ({ elementId }) => {
  const width = 50;
  const height = 50;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - `${width / 2}`,
        y: e.clientY - `${height / 2}`,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <CursorStyle
        x={mousePosition.x}
        y={mousePosition.y}
        height={height}
        width={width}
        gradus="50%"
        border={"2px solid #fff"}
      ></CursorStyle>
    </>
  );
};

export default Cursor1;
