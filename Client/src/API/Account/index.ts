import { LoginInfoType, RegisterInfoType } from "@Type/Account";
import axios from "axios";
import { TARGET_URL } from "..";

export const postLoginInfo = async (body: LoginInfoType) => {
  const { data } = await axios.post(`${TARGET_URL}/users/sign-in`, body);
  return data;
};

export const postRegisterInfo = async (body: RegisterInfoType) => {
  const { pw: password } = body;
  const { data } = await axios.post(`${TARGET_URL}/users/sign-up`, {
    ...body,
    password,
  });
  return data;
};

export const postRequestMail = async (body: { email: string }) => {
  const { data } = await axios.post(`${TARGET_URL}/auths/req-mail`, body);
  return data;
};

export const postCheckMail = async (body: {
  cacheKey: string;
  authNum: string;
}) => {
  const { data } = await axios.post(`${TARGET_URL}/auths/verify-mail`, body);
  return data;
};

export const checkDuplicateUserId = async ({ id }: { id: string }) => {
  const { data } = await axios.post(`${TARGET_URL}/users/duplicateCheck/`, {
    id,
  });
  return data;
};
