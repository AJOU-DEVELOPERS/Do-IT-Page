import axios from "axios";
import { API_GET_OPTION } from "@Constant/.";

export const getLoginInfo = async () => {
  const { data } = await axios.get("/checkLogin.json", API_GET_OPTION);
  return data;
};

export const getNoticeContents = async () => {
  const { data } = await axios.get("/NoticeBoardContent.json", API_GET_OPTION);
  return data;
};
