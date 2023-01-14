import Web3Image from "../news-homepage-main/assets/images/image-web-3-desktop.jpg";
import Aside from "./Aside";
import Cards from "./Cards";

import "./styles/grid.style.css";

export default function () {
  return (
    <>
      <div className="grid">
        <div className="grid-image">
          <img src={Web3Image} alt="web-3-image" />
        </div>
        <Aside />
        <div className="big-title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="text-content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="btn-wrapper">
            <button className="btn">Read more</button>
          </div>
        </div>

        <Cards />
      </div>
    </>
  );
}
