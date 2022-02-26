import LoginButton from "@Atoms/Button/Login";
import RegisterLabel from "@Atoms/RegisterLabel";
import {
  RegisterButtonType,
  CheckDuplicateButton,
  LoginInputType,
} from "@Style/.";
import { useRef, useState } from "react";
import { RegisterContainer, Title, Section, SubWrapper } from "./styles";
import { checkDuplicateId, checkMail, clickMail, RegisterClick } from "./util";

const RegisterInput = () => {
  const [checkId, setCheckId] = useState<boolean>(false);
  const [mailKey, setMailKey] = useState<string>("");
  const [mailCheck, setMailCheck] = useState<boolean>(false);

  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const studentIdRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const emailCheckRef = useRef<HTMLInputElement | null>(null);

  const handleRegisterClick = () =>
    RegisterClick({
      idRef,
      pwRef,
      nameRef,
      studentIdRef,
      subjectRef,
      emailRef,
      checkId,
      mailCheck,
    });

  const handleCheckDuplicateId = async () => {
    const data = await checkDuplicateId({ idRef });
    console.log(data);
    if (!data) return;
    setCheckId(true);
  };
  const handleClickMail = async () => {
    const cacheKey = await clickMail({ emailRef });
    setMailKey(cacheKey);
  };
  const handleCheckMail = async () => {
    const data = await checkMail({ emailCheckRef, cacheKey: mailKey });
    console.log(data);
    if (!data) return;
    setMailCheck(true);
  };

  return (
    <RegisterContainer>
      <Title>회원가입</Title>
      <Section>
        <SubWrapper>
          <RegisterLabel
            {...LoginInputType}
            title="ID"
            inputRef={idRef}
            placeholder="아이디를 입력하세요."
          />
          <LoginButton
            {...CheckDuplicateButton}
            title="중복확인"
            onClick={handleCheckDuplicateId}
          />
        </SubWrapper>
        <RegisterLabel
          {...LoginInputType}
          title="PW"
          type="password"
          inputRef={pwRef}
          placeholder="패스워드를 입력하세요."
        />
        <RegisterLabel
          {...LoginInputType}
          title="이름"
          inputRef={nameRef}
          placeholder="이름을 입력하세요."
        />
        <RegisterLabel
          {...LoginInputType}
          title="학과"
          inputRef={subjectRef}
          placeholder="전공을 입력하세요."
        />
        <RegisterLabel
          {...LoginInputType}
          title="학번"
          inputRef={studentIdRef}
          placeholder="학번을 입력하세요."
        />
        <SubWrapper>
          <RegisterLabel
            {...LoginInputType}
            title="이메일"
            inputRef={emailRef}
            placeholder="이메일을 입력하세요."
          />
          <LoginButton
            {...CheckDuplicateButton}
            title="메일 인증"
            onClick={handleClickMail}
          />
        </SubWrapper>

        <SubWrapper>
          <RegisterLabel
            {...LoginInputType}
            title="인증번호"
            inputRef={emailCheckRef}
            placeholder="인증번호를 입력하세요."
          />
          <LoginButton
            {...CheckDuplicateButton}
            title="확인하기"
            onClick={handleCheckMail}
          />
        </SubWrapper>
      </Section>
      <LoginButton
        {...RegisterButtonType}
        title="가입하기"
        onClick={handleRegisterClick}
      />
    </RegisterContainer>
  );
};

export default RegisterInput;
