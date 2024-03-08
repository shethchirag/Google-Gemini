import "./sidebar.css";
import { assets, bottomIcon } from "./../../assets/assets";
import { useState } from "react";

function SideBar() {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          onClick={() => {
            setExtended(!extended);
          }}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} />
              <p>what is react</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        {bottomIcon.map((item) => (
          <div
            key={item.id}
            className="pr-[10px] cursor-pointer flex items-center gap-[10px] hover:bg-[#e2e6eb] hover:rounded-[50px] text-[#282828] p-[10px]"
          >
            <img src={item.bottomIconSrc} />
            {extended ? <p>{item.bottomIconName}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
