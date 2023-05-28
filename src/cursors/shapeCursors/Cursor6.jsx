import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";

const Cursor6 = ({ elementId }) => {
  const innerSize = 40;
  const scaleOuter = 1.5;
  const innerRef = useRef();
  const outerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - `${innerSize / 2}`,
        y: e.clientY - `${innerSize / 2}`,
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

  const style = {
    innerStyle: {
      top: mousePosition.y,
      left: mousePosition.x,
      width: innerSize,
      height: innerSize,
      borderRadius: "50%",
      background: Theme.primaryBlue,
      transform: "scale(0.3)",
      transition: "transform 150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
    },
    outerStyle: {
      top: mousePosition.y,
      left: mousePosition.x,
      width: innerSize,
      height: innerSize,
      border: `2px solid ${Theme.primaryBlue}`,
      transition: "150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
      opacity: "0.5",
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    },
  };

  useEffect(() => {
    if (isClicked) {
      outerRef.current.style.transform = `scale(${scaleOuter})`;
    } else {
      outerRef.current.style.transform = "scale(1)";
    }
  }, [isClicked, style]);

  return (
    <>
      <div ref={innerRef} style={style.innerStyle} className="cursor" />
      <div ref={outerRef} style={style.outerStyle} className="cursor" />
    </>
  );
};

export default Cursor6;
