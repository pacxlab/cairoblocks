import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        CairoBlocks{" "}
        <span>
          <img src="" />
        </span>
      </div>
      <div className="middle-btns">
        <button className="">Run</button>
        <button className="">Stop</button>
      </div>
      <div className="reset-btn">hello</div>
    </div>
  );
};

export default Header;
