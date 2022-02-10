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

export const BOARD_INFOS: BoardType[] = [
  {
    boardType: "자유게시판",
    apiSrc: GET_FREE_CONTENT_URL,
  },
  {
    boardType: "스터디",
    apiSrc: GET_STUDY_CONTENT_URL,
  },
  {
    boardType: "프로젝트",
    apiSrc: GET_PROJECT_CONTENT_URL,
  },
  {
    boardType: "과방 대여",
    apiSrc: GET_ROOM_CONTENT_URL,
  },
];
// carousel
export const CAROUSEL_URL = [
  "/loginBg.jpeg",
  "/carousel1.jpeg",
  "/carousel2.jpeg",
];
export const CAROUSEL_TIME = 3000;

// content

export const MIDDLE_IMG_URL = [
  "/process_logo.png",
  "/study_logo.png",
  "/room_logo.png",
];

export const LAST_IMG_URL = [
  "/secondContent.png",
  "/secondContent.png",
  "/secondContent.png",
  "/secondContent.png",
];

export const RANKING_IMG_URL = [
  "/gold_icon.png",
  "/silver_icon.png",
  "/bronze_icon.png",
];

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

export const SmallButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const MediumButtonType = {
  width: "200px",
  height: "100px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const LargeButtonType = {
  width: "300px",
  height: "150px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
};

export const LoginButtonType = {
  width: "320px",
  height: "48px",
  borderColor: "#0c218b",
  backGroundColor: "#0c218b",
  color: "#fff",
  fontSize: "18px",
  radius: "0px",
};

export const SmallLoginButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
  fontSize: "18px",
  radius: "0px",
};

export const MainPageLastButtonType = {
  width: "320px",
  height: "70px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
};
// Input

export const LoginInputType = {
  width: "320px",
  height: "45px",
  borderColor: "#e8f0fe",
  margin: "0 0 10px 0",
  padding: "0 0 0 10px",
  background: "#e8f0fe",
};
