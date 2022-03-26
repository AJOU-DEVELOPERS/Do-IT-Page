import {
  API_GET_OPTION,
  GET_CHECK_LOGIN_URL,
  GET_DEPARTMENT_DATA,
  GET_HEADER_TOKEN,
  POST_CHECK_DUPLICATE_USER_ID,
  POST_CHECK_MAIL,
  POST_CIRCLE_JOIN,
  POST_LOGIN_INFO,
  POST_REGISTER_INFO,
  POST_REQUEST_MAIL,
} from "@Constant/API";
import { LoginInfoType, RegisterInfoType } from "@Type/Account";
import axios from "axios";

export const getDepartment = async () => {
  const { data } = await axios.get(GET_DEPARTMENT_DATA, GET_HEADER_TOKEN());
  return data;
};

export const getCheckLogin = async () => {
  const { data } = await axios.get(GET_CHECK_LOGIN_URL, GET_HEADER_TOKEN());
  return data;
};
export const postLoginInfo = async (body: LoginInfoType) => {
  const { data } = await axios.post(POST_LOGIN_INFO, body, GET_HEADER_TOKEN());
  return data;
};

export const postRegisterInfo = async (body: RegisterInfoType) => {
  const { data } = await axios.post(
    POST_REGISTER_INFO,
    body,
    GET_HEADER_TOKEN()
  );
  return data;
};

export const postRequestMail = async (body: { email: string }) => {
  const { data } = await axios.post(
    POST_REQUEST_MAIL,
    body,
    GET_HEADER_TOKEN()
  );
  return data;
};

export const postCheckMail = async (body: {
  cacheKey: string;
  authNum: string;
}) => {
  const { data } = await axios.post(POST_CHECK_MAIL, body, GET_HEADER_TOKEN());
  return data;
};

export const checkDuplicateUserId = async ({ id }: { id: string }) => {
  const { data } = await axios.post(
    POST_CHECK_DUPLICATE_USER_ID,
    {
      id,
    },
    GET_HEADER_TOKEN()
  );
  return data;
};

export const postCircleJoin = async () => {
  const { data } = await axios.post(POST_CIRCLE_JOIN, {}, GET_HEADER_TOKEN());
  return data;
};
