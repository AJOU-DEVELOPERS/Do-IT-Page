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

export const GET_NOTICE_POST_URL = "/dummyData/NoticeBoardContent.json";

export const GET_BOARD_POST_URL = "/dummyData/FreeBoardContent.json";

export const NOTICE_URL = "/notice";

export const FREE_BOARD_URL = "/board";

export const STUDY_BOARD_URL = "/study";

export const PROJECT_BOARD_URL = "/project";

export const ROOM_BOARD_URL = "/reserve";

export const PHOTO_BOARD_URL = "/photos";

export const RANKING_BOARD_URL = "/rank";

export const MY_PAGE_URL = "/mypage";

export const MAIN_URL = "/main";

export const BEFORE_URL = "/before";

export const GET_SOLVED_CARD_URL = (id: string) =>
  `http://mazassumnida.wtf/api/v2/generate_badge?boj=${id}`;

// carousel
export const CAROUSEL_URL = [
  "/assets/Login/loginBg.jpeg",
  "/assets/CAROUSEL/carousel1.jpeg",
  "/assets/CAROUSEL/carousel2.jpeg",
];

export const USER_ICON_URL = "/assets/MainPage/userIcon.png";

export const CAROUSEL_TIME = 3000;

//admin category
export const ADMIN_CATEGORY = [
  "동아리원 관리",
  "동아리 신청 관리",
  "스터디 관리",
  "프로젝트 관리",
  "과방 신청 관리",
  "공지사항 관리",
];

export const MAIN_PREVIEW_IMAGE = "/assets/MainPage/codeImage.jpg";

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

export const STUDY_STATUS = {
  collecting: "모집 중",
  processing: "진행 중",
  done: "마감",
};

export const MAIN_BOARD_PREVIEW_LIST = [
  "스터디",
  "공지사항",
  "이미지",
  "백준랭킹",
  "프로젝트",
  "과방 대여",
  "자유게시판",
  "사진첩",
];

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

export const _BOARD_INFOS: BoardInfoType = {
  공지사항: {
    pageSrc: NOTICE_URL,
    apiSrc: GET_NOTICE_CONTENT_URL,
    boardApiSrc: GET_NOTICE_POST_URL,
    previewSize: 7,
    previewType: "basic",
  },
  자유게시판: {
    pageSrc: FREE_BOARD_URL,
    apiSrc: GET_FREE_CONTENT_URL,
    boardApiSrc: GET_BOARD_POST_URL,
    previewSize: 7,
    previewType: "basic",
  },
  백준랭킹: {
    pageSrc: RANKING_BOARD_URL,
    apiSrc: GET_RANKING_URL,
    previewSize: 4,
    previewType: "ranking",
  },
  프로젝트: {
    pageSrc: PROJECT_BOARD_URL,
    apiSrc: GET_PROJECT_CONTENT_URL,
    previewSize: 3,
    previewType: "card",
  },
  스터디: {
    pageSrc: STUDY_BOARD_URL,
    apiSrc: GET_STUDY_CONTENT_URL,
    previewSize: 3,
    previewType: "card",
  },
  "과방 대여": {
    pageSrc: ROOM_BOARD_URL,
    apiSrc: GET_ROOM_CONTENT_URL,
    previewSize: 1,
    previewType: "calendar",
  },
  마이페이지: {
    pageSrc: MY_PAGE_URL,
    apiSrc: "",
  },
  사진첩: {
    pageSrc: PHOTO_BOARD_URL,
    apiSrc: GET_PHOTO_CONTENT_URL,
    previewSize: 4,
    previewType: "image",
    alignPreview: "row",
  },
  이미지: {
    pageSrc: "",
    apiSrc: "",
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

export const FOOTER_MESSAGE = `Do It / 임원진 김영진 010-8931-4993 / 과방 구학 243호 / 이메일@ajou.ac.kr`;

export const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
