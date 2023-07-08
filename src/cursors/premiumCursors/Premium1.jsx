import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../styled-components/globalStyle";

const Premium1 = ({ elementId }) => {
  const innerSize = 30;
  const innerScale = 0.7;
  // const outerScale = 1.4;
  const innerRef = useRef();
  const circles = document.querySelectorAll(".circle");
  // const outerRef = useRef();
  const [isAvaliable, setIsAvaliable] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  const animateCircles = () => {
    let x = mousePosition.x;
    let y = mousePosition.y;

    circles.forEach((circle, index) => {
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      // circle.style.scale = (circles.length - index) / circles.length;
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      // const newX = x += (nextCircle.x - x) * 0.5
      // const newY = y += (nextCircle.y - y) * 0.5
      // setMousePosition({ x: newX, y: newY })
      x += (nextCircle.x - x) * 0.5;
      y += (nextCircle.y - y) * 0.5;
    });
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - `${innerSize / 2}`,
        y: e.clientY - `${innerSize / 2}`,
      });
      animateCircles();
    };
    window.addEventListener("mousemove", mouseMove);
    // MOUSE ENTER IN ELEMENT
    // window.addEventListener("mouseenter", () => {
    //   setIsAvaliable(true);
    // });
    // // MOUSE OUT IN THE ELEMENT
    // window.addEventListener("mouseout", () => {
    //   setIsAvaliable(false);
    // });
    // ELEMENT CLICKED
    window.addEventListener("mousedown", () => {
      setIsClicked(true);
    });
    window.addEventListener("mouseup", () => {
      setIsClicked(false);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      // MOUSE ENTER IN ELEMNT
      // window.removeEventListener("mouseenter", () => {
      //     setIsAvaliable(true);
      //   });
      // // MOUSE OUT IN ELEMENT
      // window.removeEventListener("mouseout", () => {
      //   setIsAvaliable(false);
      // });
      // ELEMENT CLICKED
      window.removeEventListener("mousedown", () => {
        setIsClicked(true);
      });
      window.removeEventListener("mouseup", () => {
        setIsClicked(false);
      });
    };
  }, [mousePosition, circles]);

  const style = {
    innerStyle: {
      width: innerSize,
      height: innerSize,
      borderRadius: "50%",
      background: Theme.primaryBlue,
      transition: "transform 150ms ease-out",
      display: `${isAvaliable ? "block" : "none"}`,
    },
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
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
      <div ref={innerRef} style={style.innerStyle} className="circle cursor" />
    </>
  );
};

export default Premium1;
