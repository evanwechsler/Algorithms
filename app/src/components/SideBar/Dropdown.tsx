import React, { ReactElement, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useMeasure } from "react-use";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  title: string;
  path: string;
}

export default function Dropdown({
  children,
  title,
  path,
}: Props): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const expand = useSpring({
    height: isOpen ? `${contentHeight}px` : "0px",
    opacity: isOpen ? 1 : 0,
  });
  const spin = useSpring({
    transform: isOpen ? "rotate(225deg)" : "rotate(0deg)",
  });

  useEffect(() => {
    setContentHeight(height);
    window.addEventListener("resize", () => setContentHeight(height));

    return window.removeEventListener("resize", () => setContentHeight(height));
  }, [height]);

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <Link to={path}>{title}</Link>
        <animated.button
          className="dropdown-button"
          onClick={() => setOpen(!isOpen)}
          style={spin}
        >
          <BiPlus size={30} />
        </animated.button>
      </div>
      <animated.div style={expand} className="sub-menu">
        <div ref={ref}>{isOpen && children}</div>
      </animated.div>
    </div>
  );
}
