import { WEB_SERVER_URL } from ".";

export const MAIN_PREVIEW_IMAGE = "/assets/MainPage/codeImage.jpg";

// content

export const MIDDLE_IMG_URL = [
  `${WEB_SERVER_URL}/assets/Content/process_logo.png`,
  `${WEB_SERVER_URL}/assets/Content/study_logo.png`,
  `${WEB_SERVER_URL}/assets/Content/room_logo.png`,
];

export const LAST_IMG_URL = [
  "/assets/Content/secondContent.png",
  "/assets/Content/secondContent.png",
  "/assets/Content/secondContent.png",
  "/assets/Content/secondContent.png",
];

export const RANKING_IMG_URL = [
  "/assets/BackJoon/gold_icon.png",
  "/assets/BackJoon/silver_icon.png",
  "/assets/BackJoon/bronze_icon.png",
];

// carousel
export const CAROUSEL_URL = [
  "/assets/Login/loginBg.jpeg",
  "/assets/CAROUSEL/carousel1.jpeg",
  "/assets/CAROUSEL/carousel2.jpeg",
];

export const USER_ICON_URL = "/assets/MainPage/userIcon.png";

export const GET_SOLVED_CARD_URL = (id: string) =>
  `http://mazassumnida.wtf/api/v2/generate_badge?boj=${id}`;
