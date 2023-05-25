import React, { useEffect, useState } from "react";
import { CursorStyle } from "./cursorStyle";

const Cursor1 = ({ elementId }) => {
  const width = 50;
  const height = 50;
  const duration = 0.1;
  const scale = 1.4;
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
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
    document.getElementById(elementId).addEventListener("mousemove", mouseMove);
    // MOUSE ENTER IN ELEMENT
    document.getElementById(elementId).addEventListener("mouseenter", () => {
      setIsAvaliable(true);
    });
    // MOUSE OUT IN THE ELEMENT
    document.getElementById(elementId).addEventListener("mouseout", () => {
      setIsAvaliable(false);
    });
    // ELEMENT CLICKED
    document.getElementById(elementId).addEventListener("mousedown", () => {
      setIsClicked(true);
    });
    document.getElementById(elementId).addEventListener("mouseup", () => {
      setIsClicked(false);
    });
    return () => {
      document
        .getElementById(elementId)
        .removeEventListener("mousemove", mouseMove);
      // MOUSE ENTER IN ELEMNT
      document
        .getElementById(elementId)
        .removeEventListener("mouseenter", () => {
          setIsAvaliable(true);
        });
      // MOUSE OUT IN ELEMENT
      document.getElementById(elementId).removeEventListener("mouseout", () => {
        setIsAvaliable(false);
      });
      // ELEMENT CLICKED
      document
        .getElementById(elementId)
        .removeEventListener("mousedown", () => {
          setIsClicked(true);
        });
      document.getElementById(elementId).removeEventListener("mouseup", () => {
        setIsClicked(false);
      });
    };
  }, []);

  return (
    <>
      {isAvaliable ? (
        <CursorStyle
          y={mousePosition.y}
          x={mousePosition.x}
          width={width}
          height={height}
          tduration={duration}
          scale={scale}
          isScale={isClicked}
          opacity={"0.5"}
          gradus={"50%"}
        ></CursorStyle>
      ) : (
        ""
      )}
    </>
  );
};

export default Cursor1;
