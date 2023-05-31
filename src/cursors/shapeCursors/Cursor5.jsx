import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";

const Cursor5 = ({ elementId }) => {
  const innerSize = 40;
  const rotateOuter = "90deg";
  const innerRef = useRef();
  const outerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -40, y: -40 });

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
      background: `${Theme.primaryBlue}`,
      transition: "150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
      opacity: "0.5",
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      transform: "scale(1.2)",
    },
  };

  useEffect(() => {
    if (isClicked) {
      outerRef.current.style.transform = `rotate(${rotateOuter})`;
    } else {
      outerRef.current.style.transform = "rotate(0)";
    }
  }, [isClicked, style]);

  return (
    <>
      <div ref={innerRef} style={style.innerStyle} className="cursor" />
      <div ref={outerRef} style={style.outerStyle} className="cursor" />
    </>
  );
};

export default Cursor5;
