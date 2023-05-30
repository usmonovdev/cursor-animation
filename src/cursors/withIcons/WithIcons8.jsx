import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";
import icon1 from "../../assets/cursor-icons/8.png";

const WithIcons8 = ({ elementId }) => {
  const innerSize = 70;
  const innerScale = 0.7;
  const innerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -90, y: -90 });

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
      transition: "transform 150ms ease-out, top 80ms ease-out",
      display: `${isAvaliable ? "flex" : "none"}`,
      alignItems: "center",
      justifyContent: "center"
    },
    imageStyle: {
      width: "30px",
      height: "30px",
    }
  };

  useEffect(() => {
    if (isClicked) {
      innerRef.current.style.transform = `scale(${innerScale})`;
    } else {
      innerRef.current.style.transform = "scale(1)";
    }
  }, [isClicked, style]);

  return (
    <>
      <div ref={innerRef} style={style.innerStyle} className="cursor">
        <img src={icon1} alt="icon 1" style={style.imageStyle} />
      </div>
    </>
  );
};

export default WithIcons8;
