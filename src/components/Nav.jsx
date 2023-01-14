import Logo from "../news-homepage-main/assets/images/logo.svg";

import MenuIcon from "../news-homepage-main/assets/images/icon-menu.svg";

import "./styles/nav.style.css";
export default function ({ menuShow, handleClick }) {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li className="list-item">
            <a href="">Home</a>
          </li>
          <li className="list-item">
            <a href="">New</a>
          </li>
          <li className="list-item">
            <a href="">Popular</a>
          </li>
          <li className="list-item">
            <a href="">Trending</a>
          </li>
          <li className="list-item">
            <a href="">Categories</a>
          </li>
        </ul>
        <div className="menu">
          <img src={MenuIcon} alt="menu-icon" onClick={handleClick} />
        </div>
      </nav>
    </>
  );
}
