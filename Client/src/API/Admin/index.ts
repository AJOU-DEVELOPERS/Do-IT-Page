import { GET_USERS_INFO_URL, GET_HEADER_TOKEN, GET_CHECK_ADMIN } from "@Constant/API";
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
    data: { res },
  } = await axios.get(GET_USERS_INFO_URL, GET_HEADER_TOKEN());
  return res;
};
