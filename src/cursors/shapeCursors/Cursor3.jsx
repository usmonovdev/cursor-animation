import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";

const Cursor3 = ({ elementId }) => {
  const outerSize = 30;
  const outerScale = 1.4;
  const outerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - `${outerSize / 2}`,
        y: e.clientY - `${outerSize / 2}`,
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
    outerStyle: {
      top: mousePosition.y,
      left: mousePosition.x,
      width: outerSize,
      height: outerSize,
      borderRadius: "50%",
      border: `2px solid ${Theme.primaryBlue}`,
      transition: "transform 150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
    },
  };

  useEffect(() => {
    if (isClicked) {
      outerRef.current.style.transform = `scale(${outerScale})`;
    } else {
      outerRef.current.style.transform = "scale(1)";
    }
  }, [isClicked, style]);

  return (
    <>
      <div ref={outerRef} style={style.outerStyle} className="cursor" />
    </>
  );
};

export default Cursor3;
