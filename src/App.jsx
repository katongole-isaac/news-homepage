import React, { useRef } from "react";
import "./app.css";
import Grid from "./components/Grid";
import Nav from "./components/Nav";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

export default function () {
  const [menuShow, setMenuShow] = useState(false);
  const wrapperRef = useRef();
  const containerRef = useRef();

  const handleClick = () => {
    wrapperRef.current.style.width = "100%";
    wrapperRef.current.style.left = "0px";
    containerRef.current.style.overflow = "hidden";
  };

  return (
    <>
      {/* 
    
    <h1> News homepage [landing page ] </h1>
    
    */}
      <div className="wrapper" ref={containerRef}>
        <div className="container">
          <MobileMenu
            setMenuShow={setMenuShow}
            wrapperRef={wrapperRef}
            containerRef={containerRef}
          />

          <Nav menuShow={menuShow} handleClick={handleClick} />

          <Grid />
        </div>
      </div>
    </>
  );
}
