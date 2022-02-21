import axios from "axios";
import { History } from "history";

export const LoginClick = ({
  idRef,
  pwRef,
  history,
}: {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
  pwRef: React.MutableRefObject<HTMLInputElement | null>;
  history: History;
}) => {
  if (!idRef?.current || !pwRef?.current) return;

  const {
    current: { value: idValue },
  } = idRef;

  const {
    current: { value: pwValue },
  } = pwRef;

  history.push("/main");
};

export const RegisterClick = async ({
  idRef,
  pwRef,
  nameRef,
  studentIdRef,
  subjectRef,
  emailRef,
}: {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
  pwRef: React.MutableRefObject<HTMLInputElement | null>;
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
  studentIdRef: React.MutableRefObject<HTMLInputElement | null>;
  subjectRef: React.MutableRefObject<HTMLInputElement | null>;
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  if (
    !idRef?.current ||
    !pwRef?.current ||
    !nameRef?.current ||
    !studentIdRef?.current ||
    !subjectRef?.current ||
    !emailRef?.current
  )
    return;

  const {
    current: { value: id },
  } = idRef;
  const {
    current: { value: pw },
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

  const res = await axios.post("localhost:3000/users/sign-up", {
    id,
    pw,
    name,
    studentId,
    subject,
    email,
  });

  return res;
};

export const checkDuplicateId = ({
  idRef,
}: {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  if (!idRef?.current) {
    alert("아이디 입력하세요");
    return;
  }
  console.log(idRef.current.value);
};

export const clickMail = ({
  emailRef,
}: {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  if (!emailRef.current) {
    alert("메일 입력하세요");
    return;
  }
  console.log(emailRef.current.value);
};
