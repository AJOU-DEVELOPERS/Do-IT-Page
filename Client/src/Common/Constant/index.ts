import { BoardInfoType, BoardType } from "../Type";

export const API_GET_OPTION = {
  withCredentials: true,
};

export const GET_CHECK_LOGIN_URL = "/dummyData/checkLogin.json";

export const GET_NOTICE_CONTENT_URL = "/dummyData/NoticeBoardContent.json";

export const GET_FREE_CONTENT_URL = "/dummyData/FreeBoardContent.json";

export const GET_STUDY_CONTENT_URL = "/dummyData/StudyBoardContent.json";

export const GET_PROJECT_CONTENT_URL = "/dummyData/ProjectBoardContent.json";

export const GET_ROOM_CONTENT_URL = "/dummyData/RoomBoardContent.json";

export const GET_RANKING_URL = "/dummyData/BaekJoonRanking.json";

export const GET_PHOTO_CONTENT_URL = "/dummyData/PhotoBoardContent.json";

export const NOTICE_URL = "/notice";

export const FREE_BOARD_URL = "/board";

export const STUDY_BOARD_URL = "/study";

export const PROJECT_BOARD_URL = "/project";

export const ROOM_BOARD_URL = "/room";

export const PHOTO_BOARD_URL = "/photos";

export const RANKING_BOARD_URL = "/ranking";

export const MY_PAGE_URL = "/mypage";

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
export const CAROUSEL_URL = [
  "/assets/Login/loginBg.jpeg",
  "/assets/CAROUSEL/carousel1.jpeg",
  "/assets/CAROUSEL/carousel2.jpeg",
];
export const CAROUSEL_TIME = 3000;

//admin category
export const ADMIN_CATEGORY = [
  "동아리원 모집",
  "동아리 신청 관리",
  "과방 신청 관리",
  "공지사항 관리",
];

// content

export const MIDDLE_IMG_URL = [
  "/assets/Content/process_logo.png",
  "/assets/Content/study_logo.png",
  "/assets/Content/room_logo.png",
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

export const HEADER_NAV_LIST = [
  "공지사항",
  "자유게시판",
  "백준랭킹",
  "프로젝트",
  "스터디",
  "과방 대여",
  "마이페이지",
];

export const _BOARD_INFOS: BoardInfoType = {
  공지사항: {
    pageSrc: NOTICE_URL,
  },
  자유게시판: {
    pageSrc: FREE_BOARD_URL,
  },
  백준랭킹: {
    pageSrc: RANKING_BOARD_URL,
  },
  프로젝트: {
    pageSrc: PROJECT_BOARD_URL,
  },
  스터디: {
    pageSrc: STUDY_BOARD_URL,
  },
  "과방 대여": {
    pageSrc: ROOM_BOARD_URL,
  },
  마이페이지: {
    pageSrc: MY_PAGE_URL,
  },
};

export const HEADER_NAV_LENGTH = HEADER_NAV_LIST.length;

export const MANAGER_INFO = "민태홍 김영진";

export const INTRODUCTION = "안녕하세요 김연진 입니다";

export const CONTENT = [
  {
    title: "두잇은 어떤 동아리인가요 ?",
    text: `두잇은 아주대학교 학생들을 바탕으로 개발, 디자인, 기획을 함께 진행하여 꿈을 실현하기 위해 노력하는 아주대학교 대표 IT 동아리 입니다. `,
    type: "Info",
  },
  {
    title: "실무에 가까운 프로세스",
    text: `함께 협업을 진행함으로써
실무와 유사한 프로젝트를 진행하여
실무에 필요한 능력을 함양합니다.`,
    type: "Todo",
  },

  {
    title: "자기계발 및 스터디 진행",
    text: `컴퓨터와 쉽게 소통할 수 있는
    교육 프로세스를 통해 모집된 구성원들과
    스터디 및 프로젝트를 진행합니다.`,
    type: "Todo",
  },
  {
    title: "동아리방 예약 신청",
    text: `평일 오후 6시 이후,
    주말 시간의 동아리방 사용을
    사전에 신청하여 이용할 수 있습니다.`,
    type: "Todo",
  },
  {
    title: "D/ream",
    text: `평소 불편함을 느꼇던 작은 사소한 것들도
생각으로만 하던 기발한 아이디어까지
모두 실현할 수 있도록 여러분의 꿈을 위해
두잇은 언제나 곁에서 도와드립니다 !`,
  },
  {
    title: "O/wn",
    text: `개발에 필요한 지식, 
취업에 필요한 지식, 
단순히 외우는 것이 아닌 
자신의 것으로 만들 수 있습니다.`,
  },
  {
    title: "I/nteract",
    text: `팀 단위 프로젝트 진행 속에서 
우리는 소통을 배웁니다. 
우리는 서로의 거울이 되어 
함께 배울 때 더욱더 큰 발전을 도출합니다.`,
  },
  {
    title: "T/rend",
    text: `두잇은 언제나,
최신 기술스택을 학습하며

`,
  },
];
