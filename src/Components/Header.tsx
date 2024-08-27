import "./Header.css";
import BlockImg from "../assets/images/block-img.png";
import InkLang from "../assets/images/ink-icon.png";
import SolidityJPEG from "../assets/images/solidity.jpeg";
import RefreshSVG from "./refresh";

type HeaderProps = {
  toggleShowERC20: () => void;
  toggleShowERC721: () => void;
};

const Header: React.FC<HeaderProps> = ({
  toggleShowERC20,
  toggleShowERC721,
}) => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <div>PolkaBlocks</div>
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
      <div className="sub-header">
        <div className="ctrl-btns">
          <div className="view-ctrl">View</div>
          <div className="ctrl-btns-inner">
            <button onClick={() => toggleShowERC20()}>ERC20</button>
            <button onClick={() => toggleShowERC721()}>ERC721</button>
          </div>
          <input type="range" style={{ backgroundColor: "red" }} />
        </div>
        <div className="mode-btns">
          <div className="code">
            Ink!
            {<span>
              <img
                width="15px"
                style={{ marginLeft: "4px" }}
                src={InkLang}
              />
            </span> }
          </div>
          <div className="decode">
            SOLIDITY{" "}
            <span>
              <img
                width="15px"
                style={{ marginLeft: "4px" }}
                src={SolidityJPEG}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
