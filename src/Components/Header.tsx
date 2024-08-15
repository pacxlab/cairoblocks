import React from "react";
import "./Header.css";
import BlockImg from "../block-img.png";
import RefreshSVG from "./refresh";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div>CairoBlocks</div>
        <img height="60px" width="60px" src={BlockImg} />
      </div>
      <div className="middle-btns">
        <button className="run">Run</button>
        <button className="stop">Stop</button>
      </div>
      <div className="refresh-btn">
        <RefreshSVG />
      </div>
    </div>
  );
};

export default Header;
