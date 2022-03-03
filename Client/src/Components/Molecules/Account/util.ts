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

export const LoginClick = async ({ idRef, pwRef, history }: LoginClickType) => {
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
  console.log(res);
  if (res === "성공") {
    history.push("/main");
  }
};

export const RegisterClick = async ({
  idRef,
  pwRef,
  nameRef,
  studentIdRef,
  subjectRef,
  emailRef,
  checkId,
  mailCheck,
}: RegisterHandlerType) => {
  if (
    !idRef?.current ||
    !pwRef?.current ||
    !nameRef?.current ||
    !studentIdRef?.current ||
    !subjectRef?.current ||
    !emailRef?.current
  ) {
    alert("모든 내용을 입력해주세요.");
    return;
  }

  if (!checkId) {
    alert("아이디 중복확인 해주세요");
    return;
  }
  if (!mailCheck) {
    alert("메일 인증 해주세요");
    return;
  }

  const {
    current: { value: id },
  } = idRef;
  const {
    current: { value: password },
  } = pwRef;
  const {
    current: { value: name },
  } = nameRef;
  const {
    current: { value: studentId },
  } = studentIdRef;
  const {
    current: { value: subject },
  } = subjectRef;
  const {
    current: { value: email },
  } = emailRef;

  const res = await postRegisterInfo({
    id,
    password,
    name,
    studentId,
    subject,
    email,
  });
  console.log(res);

  if (res) {
    alert("회원가입에 성공하였습니다.");
    return true;
  }
  alert("회원가입 실패");
};

export const checkDuplicateId = async ({
  idRef,
}: {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  if (!idRef?.current) return;
  if (!idRef.current.value) {
    alert("아이디 입력하세요");
    return;
  }
  const res = await API({
    api: checkDuplicateUserId,
    data: { id: idRef.current.value },
  });
  return true;
  // res === "true"
  //   ? alert("사용 가능한 아이디입니다.")
  //   : alert("중복된 아이디입니다.");
  // return res === "true";
};

export const clickMail = async ({
  emailRef,
}: {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  if (!emailRef?.current) {
    alert("메일 입력하세요");
    return;
  }
  if (!emailRef.current.value.includes("@ajou.ac.kr")) {
    alert("아주대 메일이어야합니다~");
    return;
  }
  const { cacheKey, message } = await API({
    api: postRequestMail,
    data: { email: emailRef.current.value },
  });
  message === true
    ? alert("인증번호를 확인해주세요.")
    : alert("메일 아이디가 잘못되었습니다..");
  return cacheKey;
};

export const checkMail = async ({
  emailCheckRef,
  cacheKey,
}: {
  emailCheckRef: React.MutableRefObject<HTMLInputElement | null>;
  cacheKey: string;
}) => {
  if (!emailCheckRef?.current) return;
  if (!emailCheckRef.current.value) {
    alert("인증번호를 입력하세요");
    return;
  }

  const data = await API({
    api: postCheckMail,
    data: { authNum: emailCheckRef.current.value, cacheKey },
  });
  console.log(data);
  return true;
  data === "성공"
    ? alert("인증번호가 일치합니다.")
    : alert("인증번호가 일치하지 않습니다.");
  return data === "성공";
};
