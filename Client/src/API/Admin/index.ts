import { GET_USERS_INFO_URL, GET_HEADER_TOKEN, GET_CHECK_ADMIN, POST_ACCEPT_CLUB_USER_URL, POST_DENY_CLUB_USER_URL } from "@Constant/API";
import axios from "axios";

export const checkAdmin = async () => {
  try {
    const {
      data: {
        res: { message },
      },
    } = await axios.get(GET_CHECK_ADMIN, GET_HEADER_TOKEN());
    return message;
  } catch (err) {
    return false;
  }
};

export const getUsersInfo = async () => {
  const {
    data: {
      res: { clubUserList },
    },
  } = await axios.get(GET_USERS_INFO_URL, GET_HEADER_TOKEN());
  return clubUserList;
};

export const acceptClubUser = async (clubIdx: number) => {
  const {
    data: { res },
  } = await axios.post(POST_ACCEPT_CLUB_USER_URL(clubIdx), {}, GET_HEADER_TOKEN());
  return res;
};

export const denyClubUser = async (clubIdx: number) => {
  const {
    data: { res },
  } = await axios.post(POST_DENY_CLUB_USER_URL(clubIdx), {}, GET_HEADER_TOKEN());
  return res;
};
