import { TARGET_URL } from "@API/.";

export const MAIN_PREVIEW_IMAGE = "/assets/MainPage/codeImage.jpg";

// content

export const MIDDLE_IMG_URL = [
  `/assets/Content/process_logo.png`,
  `/assets/Content/study_logo.png`,
  `/assets/Content/room_logo.png`,
];
// export const MIDDLE_IMG_URL = [
//   `${TARGET_URL}/assets/Content/process_logo.png`,
//   `${TARGET_URL}/assets/Content/study_logo.png`,
//   `${TARGET_URL}/assets/Content/room_logo.png`,
// ];

export const LAST_IMG_URL = [
  "/assets/Content/prev_img_01.jpeg",
  "/assets/Content/prev_img_02.jpeg",
  "/assets/Content/prev_img_03.jpeg",
  "/assets/Content/prev_img_04.jpeg",
];

export const RANKING_IMG_URL = [
  "/assets/BackJoon/gold_icon.png",
  "/assets/BackJoon/silver_icon.png",
  "/assets/BackJoon/bronze_icon.png",
];

// carousel
export const CAROUSEL_URL = ["/assets/CAROUSEL/봄", "/assets/CAROUSEL/가을", "/assets/CAROUSEL/겨울"];

export const USER_ICON_URL = "/assets/MainPage/userIcon.png";

export const GET_SOLVED_CARD_URL = (id: string) => `http://mazassumnida.wtf/api/v2/generate_badge?boj=${id}`;
