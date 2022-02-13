import { BoardType } from "../Type";

export const API_GET_OPTION = {
  withCredentials: true,
};

export const GET_CHECK_LOGIN_URL = "/checkLogin.json";

export const GET_NOTICE_CONTENT_URL = "/NoticeBoardContent.json";

export const GET_FREE_CONTENT_URL = "/FreeBoardContent.json";

export const GET_STUDY_CONTENT_URL = "/StudyBoardContent.json";

export const GET_PROJECT_CONTENT_URL = "/ProjectBoardContent.json";

export const GET_ROOM_CONTENT_URL = "/RoomBoardContent.json";

export const GET_RANKING_URL = "/BaekJoonRanking.json";

export const GET_PHOTO_CONTENT_URL = "/PhotoBoardContent.json";

export const NOTICE_URL = "/notice";

export const FREE_BOARD_URL = "/board";

export const STUDY_BOARD_URL = "/study";

export const PROJECT_BOARD_URL = "/project";

export const ROOM_BOARD_URL = "/room";

export const PHOTO_BOARD_URL = "/photos";

export const GET_SOLVED_CARD_URL = (id: string) =>
  `http://mazassumnida.wtf/api/v2/generate_badge?boj=${id}`;

export const BOARD_INFOS: BoardType[] = [
  {
    boardType: "자유게시판",
    apiSrc: GET_FREE_CONTENT_URL,
    pageSrc: FREE_BOARD_URL,
  },
  {
    boardType: "스터디",
    apiSrc: GET_STUDY_CONTENT_URL,
    pageSrc: STUDY_BOARD_URL,
  },
  {
    boardType: "프로젝트",
    apiSrc: GET_PROJECT_CONTENT_URL,
    pageSrc: PROJECT_BOARD_URL,
  },
  {
    boardType: "과방 대여",
    apiSrc: GET_ROOM_CONTENT_URL,
    pageSrc: ROOM_BOARD_URL,
  },
];
// carousel
export const CAROUSEL_URL = ["/loginBg.jpeg", "/carousel1.jpeg", "/carousel2.jpeg"];
export const CAROUSEL_TIME = 3000;

//admin category
export const ADMIN_CATEGORY = ["동아리원 모집", "동아리 신청 관리", "과방 신청 관리", "공지사항 관리"];

// content

export const MIDDLE_IMG_URL = ["/process_logo.png", "/study_logo.png", "/room_logo.png"];

export const LAST_IMG_URL = ["/secondContent.png", "/secondContent.png", "/secondContent.png", "/secondContent.png"];

export const RANKING_IMG_URL = [
  "/gold_icon.png",
  "/silver_icon.png",
  "/bronze_icon.png",
];

export const MANAGER_INFO = "민태홍 김영진";

export const INTRODUCTION = "안녕하세요 김연진 입니다";

export const CONTENT = [
  {
    title: "두잇은 어떤 동아리인가요 ?",
    text: `두잇은 아주대학교 학생들을 바탕으로 
개발, 디자인, 기획을 함께 진행하여
꿈을 실현하기 위해 노력하는
아주대학교 대표 IT 동아리 입니다.
`,
  },
  {
    title: "실무에 가까운 프로세스",
    text: `실무에 가까운 프로세스 설명
실무에 가까운 프로세스 설명
실무에 가까운 프로세스 설명
실무에 가까운 프로세스 설명`,
  },
  {
    title: "자기계발 및 스터디 진행",
    text: `자기계발 및 스터디 진행 설명
자기계발 및 스터디 진행 설명
자기계발 및 스터디 진행 설명
자기계발 및 스터디 진행 설명`,
  },
  {
    title: "동아리방 예약 신청",
    text: `동아리방 예약 신청 설명
동아리방 예약 신청 설명
동아리방 예약 신청 설명
동아리방 예약 신청 설명`,
  },
  {
    title: "Develop",
    text: `Develop에 대한 설명
Develop에 대한 설명
Develop에 대한 설명
Develop에 대한 설명`,
  },
  {
    title: "Own",
    text: `Own에 대한 설명
Own에 대한 설명
Own에 대한 설명
Own에 대한 설명`,
  },
  {
    title: "Interact",
    text: `Interact에 대한 설명
Interact에 대한 설명
Interact에 대한 설명
Interact에 대한 설명`,
  },
  {
    title: "Trend",
    text: `Trend에 대한 설명
Trend에 대한 설명
Trend에 대한 설명
Trend에 대한 설명`,
  },
  {
    title: "두잇에 대해 더 알고 싶으신가요?",
    text: `두잇은 언제나 열정 넘치는 기획자, 개발자, 디자이너를 기다립니다!`,
  },
];
// 버튼
