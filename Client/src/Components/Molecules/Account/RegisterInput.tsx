import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";
import RegisterLabel from "@Atoms/RegisterLabel";
import { LoginButtonType, LoginInputType } from "@Style/.";
import { useRef } from "react";
import { InputContainer, Title } from "./styles";

const RegisterInput = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  const handleRegisterClick = () => {
    if (!idRef?.current || !pwRef?.current) return;

    const {
      current: { value: idValue },
    } = idRef;

    const {
      current: { value: pwValue },
    } = pwRef;
  };
  return (
    <InputContainer>
      <Title>Do-IT 회원가입</Title>
      <RegisterLabel
        {...LoginInputType}
        placeholder="아이디"
        inputRef={idRef}
      />
      <RegisterLabel
        {...LoginInputType}
        placeholder="비밀번호를 입력해주세요."
        type="password"
        inputRef={pwRef}
      />
      <RegisterLabel
        {...LoginInputType}
        placeholder="비밀번호 확인"
        type="password"
        inputRef={pwRef}
      />
      <LoginButton
        {...LoginButtonType}
        title="회원가입"
        onClick={handleRegisterClick}
      />
    </InputContainer>
  );
};

export default RegisterInput;
