import { useRef } from "react";
import MenuClose from "../news-homepage-main/assets/images/icon-menu-close.svg";

export default function ({ setShowMenu, wrapperRef, containerRef }) {
  
  const handleShowMenu = () => {
    wrapperRef.current.style.width = "0px";
    wrapperRef.current.style.left = "-300px";
    containerRef.current.style.overflow = "scroll";
  };

  return (
    <>
      <div className="mobile-menu-wrapper" ref={wrapperRef}>
        <div className="mobile-menu">
          <div className="menu-close-wrapper">
            <img src={MenuClose} alt=" menu-close" onClick={handleShowMenu} />
          </div>
          <ul>
            <li className="list-item-mobile">
              <a href="">Home</a>
            </li>
            <li className="list-item-mobile">
              <a href="">New</a>
            </li>
            <li className="list-item-mobile">
              <a href="">Popular</a>
            </li>
            <li className="list-item-mobile">
              <a href="">Trending</a>
            </li>
            <li className="list-item-mobile">
              <a href="">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
