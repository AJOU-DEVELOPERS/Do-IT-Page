import { TARGET_URL } from "@API/.";

export const GET_CHECK_LOGIN_URL = `${TARGET_URL}/users/tokenCheck`;

export const GET_NOTICE_CONTENT_URL = "/dummyData/NoticeBoardContent.json";

export const GET_FREE_CONTENT_URL = "/dummyData/FreeBoardContent.json";

export const GET_STUDY_CONTENT_URL = `${TARGET_URL}/studies`;

export const GET_PROJECT_CONTENT_URL = `${TARGET_URL}/projects`;

export const GET_ROOM_CONTENT_URL = "/dummyData/RoomBoardContent.json";

export const GET_RANKING_URL = "/dummyData/BaekJoonRanking.json";

export const GET_PHOTO_CONTENT_URL = "/dummyData/PhotoBoardContent.json";

export const GET_NOTICE_POST_URL = "/dummyData/NoticeBoardContent.json";

export const GET_BOARD_POST_URL = "/dummyData/FreeBoardContent.json";

/**--------------------- Reservation ------------------------ */

export const POST_RESERVATION_URL = `${TARGET_URL}/reservation`;

export const GET_RESERVATION_URL = `${TARGET_URL}/reservation`;

export const PATCH_RESERVATION_ACCEPT = `${TARGET_URL}/reservation/accept/`;

export const PATCH_RESERVATION_DENY = `${TARGET_URL}/reservation/reject/`;

/**--------------------- Auth ------------------------ */
export const GET_DEPARTMENT_DATA = `${TARGET_URL}/departments`;

export const POST_LOGIN_INFO = `${TARGET_URL}/users/sign-in`;

export const POST_REGISTER_INFO = `${TARGET_URL}/users/sign-up`;

export const POST_REQUEST_MAIL = `${TARGET_URL}/auths/req-mail`;

export const POST_CHECK_MAIL = `${TARGET_URL}/auths/verify-mail`;

export const POST_CHECK_DUPLICATE_USER_ID = `${TARGET_URL}/users/duplicateCheck/`;

export const POST_CIRCLE_JOIN = `${TARGET_URL}/clubs/sign-up`;

/**--------------------- Study ------------------------ */
export const POST_CREATE_STUDY = `${TARGET_URL}/studies`;

export const GET_STUDY_DATA = `${TARGET_URL}/studies`;

export const GET_STUDY_APPLY_ACCEPT = `${TARGET_URL}/studies/accept/participation`;

export const GET_STUDY_APPLY_DENY = `${TARGET_URL}/studies/reject/participation`;

export const GET_STUDY_CREATE_ACCEPT = `${TARGET_URL}/studies/accept/create`;

export const GET_STUDY_CREATE_DENY = `${TARGET_URL}/studies/reject/create`;

export const GET_STUDY_UPDATE = `${TARGET_URL}/update/studyStatus`;

export const POST_STUDY_APPLY = `${TARGET_URL}/studies`;

/**--------------------- Project ------------------------ */
export const POST_CREATE_PROJECT = `${TARGET_URL}/projects`;

export const POST_PROJECT_APPLY = `${TARGET_URL}/projects`;

export const GET_PROJECT_DATA = `${TARGET_URL}/projects`;

export const GET_PROJECT_APPLY_ACCEPT = `${TARGET_URL}/projects/accept/participation`;

export const GET_PROJECT_APPLY_DENY = `${TARGET_URL}/projects/reject/participation`;

export const GET_PROJECT_CREATE_ACCEPT = `${TARGET_URL}/projects/accept/create`;

export const GET_PROJECT_CREATE_DENY = `${TARGET_URL}/projects/reject/create`;

export const GET_PROJECT_UPDATE = `${TARGET_URL}/update/projectStatus`;

/*----------------------- Admin ------------------------- */
export const GET_USERS_INFO_URL = `${TARGET_URL}/clubs`;

export const GET_CHECK_ADMIN = `${TARGET_URL}/users/checkAdmin`;

export const POST_ACCEPT_CLUB_USER_URL = (clubIdx: number) =>
  `${TARGET_URL}/clubs/accept/${clubIdx}`;

export const POST_DENY_CLUB_USER_URL = (clubIdx: number) =>
  `${TARGET_URL}/clubs/refuse/${clubIdx}`;

/**--------------------- Common ------------------------ */
export const API_GET_OPTION = {
  withCredentials: true,
};

export const GET_HEADER_TOKEN = () => ({
  headers: {
    "access-token": localStorage.getItem("token") as string,
  },
});
