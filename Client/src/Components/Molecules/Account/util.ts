import { API } from "@API/.";
import {
  checkDuplicateUserId,
  postCheckMail,
  postLoginInfo,
  postRegisterInfo,
  postRequestMail,
} from "@API/Account";
import React from "react";
import { LoginClickType, RegisterHandlerType } from "@Type/Account";
import { REF_NUM } from "./common";

export const LoginClick = async ({
  idRef,
  pwRef,
  navigator,
  setUser,
}: LoginClickType) => {
  if (!idRef?.current || !pwRef?.current) return;

  const {
    current: { value: idValue },
  } = idRef;

  const {
    current: { value: pwValue },
  } = pwRef;

  if (!idValue) {
    alert("아이디를 입력해주세요");
    return;
  }
  if (!pwValue) {
    alert("비밀번호를 입력해주세요");
    return;
  }

  const res = await API({
    api: postLoginInfo,
    data: { id: idValue, password: pwValue },
  });

  if (!res.message) {
    alert("아이디 및 비밀번호를 확인해주세요");
    return;
  }

  localStorage.setItem("token", res.message);
  setUser(res.userInfo);
  navigator("/main");
};

export const RegisterClick = async ({
  inputRef,
  subjectRef,
  checkId,
  mailCheck,
}: RegisterHandlerType) => {
  if (!subjectRef.current) return;
  if (!checkId) {
    alert("아이디 중복확인 해주세요");
    return;
  }
  if (!mailCheck) {
    alert("메일 인증 해주세요");
    return;
  }
  const id = inputRef.current[REF_NUM.ID].value;
  const password = inputRef.current[REF_NUM.PW].value;
  const name = inputRef.current[REF_NUM.이름].value;
  const studentId = inputRef.current[REF_NUM.학번].value;
  const email = inputRef.current[REF_NUM.이메일].value;
  const phoneNumber = inputRef.current[REF_NUM.핸드폰번호].value;
  const { value: idx, label } = subjectRef.current.selectedOptions[0];

  const { message } = await postRegisterInfo({
    id,
    password,
    name,
    studentId: Number(studentId),
    email,
    phoneNumber,
    department: [
      {
        departmentIdx: Number(idx),
        name: label,
        sort: "major",
      },
    ],
  });

  if (message) {
    alert("회원가입에 성공하였습니다.");
    return true;
  }
  alert("회원가입 실패");
};

export const checkDuplicateId = async ({
  ref,
  idx,
}: {
  ref: React.MutableRefObject<HTMLInputElement[]>;
  idx: number;
}) => {
  if (!ref.current[idx].value) {
    alert("아이디 입력하세요");
    return;
  }
  const { message } = await API({
    api: checkDuplicateUserId,
    data: { id: ref.current[idx].value },
  });

  message ? alert("사용가능한 아이디입니다.") : alert("중복된 아이디 입니다.");
  return message;
};

export const clickMail = async ({
  ref,
  idx,
}: {
  ref: React.MutableRefObject<HTMLInputElement[]>;
  idx: number;
}) => {
  if (!ref.current[idx].value) {
    alert("메일 입력하세요");
    return;
  }
  if (!ref.current[idx].value.includes("@ajou.ac.kr")) {
    alert("아주대 메일이어야합니다~");
    return;
  }
  alert("잠시만 기다려주세요");
  const { cacheKey, message } = await API({
    api: postRequestMail,
    data: { email: ref.current[idx].value },
  });
  message === true
    ? alert("인증번호를 확인해주세요.")
    : alert("메일 아이디가 잘못되었습니다..");
  return cacheKey;
};

export const checkMail = async ({
  ref,
  idx,
  cacheKey,
}: {
  ref: React.MutableRefObject<HTMLInputElement[]>;
  idx: number;
  cacheKey: string;
}) => {
  if (!ref.current[idx].value) {
    alert("인증번호를 입력하세요");
    return;
  }

  const { message } = await API({
    api: postCheckMail,
    data: { authNum: ref.current[idx].value, cacheKey },
  });
  message
    ? alert("인증번호가 일치합니다.")
    : alert("인증번호가 일치하지 않습니다");
  return message;
};
