import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";

const Cursor2 = ({ elementId }) => {
  const innerSize = 30;
  const innerScale = 0.7;
  const outerScale = 1.4;
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
      opacity: "0.4",
      transition: "transform 150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
    },
    outerStyle: {
      top: mousePosition.y,
      left: mousePosition.x,
      width: innerSize,
      height: innerSize,
      transform: "scale(1.5)",
      borderRadius: "50%",
      border: `2px solid ${Theme.primaryBlue}`,
      transition: "150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
      opacity: "0.5",
    },
  };

  useEffect(() => {
    if (isClicked) {
      innerRef.current.style.transform = `scale(${innerScale})`;
      outerRef.current.style.transform = `scale(${outerScale})`;
    } else {
      innerRef.current.style.transform = "scale(1)";
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

export default Cursor2;
