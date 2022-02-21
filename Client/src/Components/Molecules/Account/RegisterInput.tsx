import LoginButton from "@Atoms/Button/Login";
import RegisterLabel from "@Atoms/RegisterLabel";
import {
  RegisterButtonType,
  CheckDuplicateButton,
  LoginInputType,
} from "@Style/.";
import { useRef } from "react";
import { RegisterContainer, Title, Section, SubWrapper } from "./styles";
import { checkDuplicateId, clickMail, RegisterClick } from "./util";

const RegisterInput = () => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const studentIdRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleRegisterClick = () =>
    RegisterClick({
      idRef,
      pwRef,
      nameRef,
      studentIdRef,
      subjectRef,
      emailRef,
    });

  const handleCheckDuplicateId = () => checkDuplicateId({ idRef });
  const handleClickMail = () => clickMail({ emailRef });
  return (
    <RegisterContainer>
      <Title>회원가입</Title>
      <Section>
        <SubWrapper>
          <RegisterLabel {...LoginInputType} title="ID" inputRef={idRef} />
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
        />
        <RegisterLabel
          {...LoginInputType}
          title="PW 확인"
          type="password"
          inputRef={pwRef}
        />
        <RegisterLabel {...LoginInputType} title="이름" inputRef={nameRef} />
        <RegisterLabel {...LoginInputType} title="학과" inputRef={subjectRef} />
        <RegisterLabel
          {...LoginInputType}
          title="학번"
          inputRef={studentIdRef}
        />
        <SubWrapper>
          <RegisterLabel
            {...LoginInputType}
            title="이메일"
            inputRef={emailRef}
          />
          <LoginButton
            {...CheckDuplicateButton}
            title="메일 인증"
            onClick={handleClickMail}
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
