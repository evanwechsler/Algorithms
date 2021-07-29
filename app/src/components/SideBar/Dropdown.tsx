import React, { ReactElement, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useMeasure } from "react-use";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Dropdown({ children, title }: Props): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const expand = useSpring({
    height: isOpen ? `${contentHeight}px` : "0px",
    opacity: isOpen ? 1 : 0,
  });

  useEffect(() => {
    setContentHeight(height);
    window.addEventListener("resize", () => setContentHeight(height));

    return window.removeEventListener("resize", () => setContentHeight(height));
  }, [height]);

  return (
    <div className="drop-down">
      <h2 onClick={() => setOpen(!isOpen)}>{title}</h2>
      <animated.div style={expand} className="sub-menu">
        <div ref={ref}>{isOpen && children}</div>
      </animated.div>
    </div>
  );
}
