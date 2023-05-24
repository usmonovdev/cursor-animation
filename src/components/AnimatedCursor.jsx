import React, { useEffect, useCallback, useState, useRef, Fragment } from "react";
import useEventListener from "../useEventListener";
import { CursorInner } from "../styled-components/cursorInner";

function AnimatedCursor({ innerSize = 50, innerScale = 1.4 }) {
    const cursorInnerRef = useRef();
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isActive, setIsActive] = useState(false);
    let endX = useRef(0);
    let endY = useRef(0);

    const onMouseMove = useCallback(({ clientX, clientY }) => {
        cursorInnerRef.current.style.top = clientY + "px";
        cursorInnerRef.current.style.left = clientX + "px";
        endX.current = clientX - `${innerSize / 2}`;
        endY.current = clientY - `${innerSize / 2}`;
    }, []);

    const animateInnerCursor = useCallback((time) => {
        if (previousTimeRef.current !== undefined) {
            coords.x += (endX.current - coords.x) / 6;
            coords.y += (endY.current - coords.y) / 6;
            cursorInnerRef.current.style.top = coords.y + 'px'
            cursorInnerRef.current.style.left = coords.x + 'px'
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateInnerCursor);
    }, [requestRef]);

    useEffect(() => (
        requestRef.current = requestAnimationFrame(animateInnerCursor)),
        [animateInnerCursor]
    );

    const onMouseDown = useCallback(() => setIsActive(true), []);
    const onMouseUp = useCallback(() => setIsActive(false), []);
    const onMouseEnter = useCallback(() => setIsVisible(true), []);
    const onMouseLeave = useCallback(() => setIsVisible(false), []);

    useEventListener("mousemove", onMouseMove, document);
    useEventListener("mousedown", onMouseDown, document);
    useEventListener("mouseup", onMouseUp, document);
    useEventListener("mouseenter", onMouseEnter, document);
    useEventListener("mouseleave", onMouseLeave, document);

    useEffect(() => {
        if (isActive) {
            cursorInnerRef.current.style.transform = `scale(${innerScale})`;
        } else {
            cursorInnerRef.current.style.transform = "scale(1)";
        }
    }, [innerScale, isActive]);

    useEffect( () => {
        var clickables = document.querySelectorAll(
            'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
        );
        clickables.forEach((el) => {
            el.style.cursor = "none";

            el.addEventListener("mouseover", () => {
                setIsActive(true);
            });

            el.addEventListener("click", () => {
                setIsActive(true);
            });

            el.addEventListener("mouseup", () => {
                setIsActive(true);
            });

            el.addEventListener("mouseout", () => {
                setIsActive(false);
            });
        });

        return () => {
            clickables.forEach((el) => {
                el.removeEventListener("mouseover", () => {
                    setIsActive(true);
                });
                el.removeEventListener("click", () => {
                    setIsActive(true);
                });
                el.removeEventListener("mouseup", () => {
                    setIsActive(true);
                });
                el.removeEventListener("mouseout", () => {
                    setIsActive(false);
                });
            });
        };
    }, [isActive]);

  return (
    <Fragment>
      <CursorInner ref={cursorInnerRef} innerSize={innerSize} borderRadius={"50%"} />
    </Fragment>
  );
}

export default AnimatedCursor;
