import "./sidebar.css";
import { assets, bottomIcon } from "./../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function SideBar() {
  const { prevPrompt, setRecentPrompt, onSent, newChat } = useContext(Context);
  const [extended, setExtended] = useState(true);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar ">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          onClick={() => {
            setExtended(!extended);
          }}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            {prevPrompt.length > 0 && <p className="recent-title">Recent</p>}
            {prevPrompt.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                key={index}
                className="recent-entry"
              >
                <img src={assets.message_icon} />
                <p>{item.slice(0, 20)}...</p>
              </div>
            ))}
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
