import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";
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
      <Input
        {...LoginInputType}
        placeholder="사용자 ID를 입력해주세요."
        inputRef={idRef}
      />
      <Input
        {...LoginInputType}
        placeholder="비밀번호를 입력해주세요."
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
