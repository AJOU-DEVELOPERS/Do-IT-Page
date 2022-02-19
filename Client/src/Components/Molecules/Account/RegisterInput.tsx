import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";
import RegisterLabel from "@Atoms/RegisterLabel";
import { RegisterButtonType, CheckDuplicateButton, LoginInputType } from "@Style/.";
import { useRef } from "react";
import { RegisterContainer, Title, Section, SubWrapper } from "./styles";

const RegisterInput = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const studentIdRef = useRef<HTMLInputElement>();
  const subjectRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();

  const handleRegisterClick = () => {
    if (!idRef?.current || !pwRef?.current) return;

    const {
      current: { value: idValue },
    } = idRef;

    const {
      current: { value: pwValue },
    } = pwRef;
  };
  const handleCheckDuplicateId = () => {};
  return (
    <RegisterContainer>
      <Title>회원가입</Title>
      <Section>
        <SubWrapper>
          <RegisterLabel {...LoginInputType} title="ID" inputRef={idRef} />
          <LoginButton {...CheckDuplicateButton} title="중복확인" onClick={handleCheckDuplicateId} />
        </SubWrapper>
        <RegisterLabel {...LoginInputType} title="PW" type="password" inputRef={pwRef} />
        <RegisterLabel {...LoginInputType} title="PW 확인" type="password" inputRef={pwRef} />
        <RegisterLabel {...LoginInputType} title="이름" inputRef={nameRef} />
        <RegisterLabel {...LoginInputType} title="학과" inputRef={subjectRef} />
        <RegisterLabel {...LoginInputType} title="학번" inputRef={studentIdRef} />
        <RegisterLabel {...LoginInputType} title="이메일" inputRef={emailRef} />
      </Section>
      <LoginButton {...RegisterButtonType} title="가입하기" onClick={handleRegisterClick} />
    </RegisterContainer>
  );
};

export default RegisterInput;
