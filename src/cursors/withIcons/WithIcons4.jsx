import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";
import icon3 from "../../assets/cursor-icons/4.png"

const WithIcons4 = ({ elementId }) => {
  const innerSize = 70;
  const innerScale = 0.7;
  const innerRef = useRef();
  const outerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -70, y: -70 });

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
      borderRadius: "20%",
      border: `2px solid ${Theme.primaryBlue}`,
      transition: "transform 150ms ease-out, top 80ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
    },
    outerStyle: {
      top: mousePosition.y,
      left: mousePosition.x,
      width: innerSize,
      height: innerSize,
      background: Theme.primaryBlue,
      borderRadius: "20%",
      transition: "transform 150ms ease-out, top 80ms ease-out",
      display: `${isAvaliable ? "flex" : "none"}`,
      alignItems: "center",
      justifyContent: "center",
      opacity: "0.5",
    },
  };

  useEffect(() => {
    if (isClicked) {
      innerRef.current.style.transform = `scale(${innerScale})`;
      outerRef.current.style.transform = `scale(${innerScale})`;
    } else {
      innerRef.current.style.transform = "scale(1)";
      outerRef.current.style.transform = "scale(1)";
    }
  }, [isClicked, style]);

  return (
    <>
      <div ref={innerRef} style={style.innerStyle} className="cursor" />
      <div ref={outerRef} style={style.outerStyle} className="cursor">
        <img src={icon3} alt="icon-3" />
      </div>
    </>
  );
};

export default WithIcons4;
