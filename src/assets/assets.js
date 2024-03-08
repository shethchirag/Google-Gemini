import history_icon from "./history_icon.png";
import menu_icon from "./menu_icon.png";
import plus_icon from "./plus_icon.png";
import question_icon from "./question_icon.png";
import setting_icon from "./setting_icon.png";
import bulb_icon from "./bulb_icon.png";
import compass_icon from "./compass_icon.png";
import gallery_icon from "./gallery_icon.png";
import mic_icon from "./mic_icon.png";
import user_icon from "./user_icon.png";
import youtube_icon from "./youtube_icon.png";
import message_icon from "./message_icon.png";
import code_icon from "./code_icon.png";
import send_icon from "./send_icon.png";
import gemini_icon from "./gemini_icon.png";

export const assets = {
  history_icon,
  menu_icon,
  plus_icon,
  question_icon,
  setting_icon,
  bulb_icon,
  compass_icon,
  gallery_icon,
  mic_icon,
  user_icon,
  youtube_icon,
  message_icon,
  code_icon,
  send_icon,
  gemini_icon,
};

export const bottomIcon = [
  { id: 1, bottomIconName: "Help", bottomIconSrc: assets.question_icon },
  { id: 2, bottomIconName: "Activity", bottomIconSrc: assets.history_icon },
  { id: 3, bottomIconName: "Settings", bottomIconSrc: assets.setting_icon },
];
export const cards = [
  {
    id: 1,
    cardText: "Suggest beautiful places to see on an  road trip ",
    cardIconSrc: assets.compass_icon,
  },
  {
    id: 2,
    cardText: "Briefly summarize this concept: urban planning",
    cardIconSrc: assets.bulb_icon,
  },
  {
    id: 3,
    cardText: "Brainstorm team bonding activities for our work retreat",
    cardIconSrc: assets.message_icon,
  },
  {
    id: 4,
    cardText: "Improve the readability of following code",
    cardIconSrc: assets.code_icon,
  },
];
export const searchBoxIcon = [
  {
    id: 1,
    inputIconSrc: assets.gallery_icon,
  },
  {
    id: 2,
    inputIconSrc: assets.mic_icon,
  },
  {
    id: 3,
    inputIconSrc: assets.send_icon,
  },
];
