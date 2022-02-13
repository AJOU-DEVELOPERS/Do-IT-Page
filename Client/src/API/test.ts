import axios from "axios";
import { API_GET_OPTION, GET_NOTICE_CONTENT_URL } from "@Constant/.";

export const getLoginInfo = async () => {
  const { data } = await axios.get("/checkLogin.json", API_GET_OPTION);
  return data;
};

export const getNoticeContents = async () => {
  const { data } = await axios.get(GET_NOTICE_CONTENT_URL, API_GET_OPTION);
  return data;
};

export const getBoardContents = async (apiSrc: string) => {
  const { data } = await axios.get(apiSrc, API_GET_OPTION);
  return data;
};
