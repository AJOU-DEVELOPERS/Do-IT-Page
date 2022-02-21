import { useRef } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";

import { LoginButtonType, LoginInputType } from "@Style/.";
import { Wrapper, Title, LoginContainer, Footer } from "./styles";

const LoginInput = ({ history }: { history: History }) => {
  const idRef = useRef<HTMLInputElement | null>(null);

  const pwRef = useRef<HTMLInputElement | null>(null);

  const handleLoginClick = () => {
    if (!idRef?.current || !pwRef?.current) return;

    const {
      current: { value: idValue },
    } = idRef;

    const {
      current: { value: pwValue },
    } = pwRef;

    history.push("/main");
  };

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Wrapper type={"id"}>
        <p>ID</p>
        <Input {...LoginInputType} placeholder="" inputRef={idRef} />
      </Wrapper>
      <Wrapper type={"pwd"}>
        <p>PW</p>
        <Input
          {...LoginInputType}
          placeholder=""
          type="password"
          inputRef={pwRef}
        />
      </Wrapper>
      <LoginButton
        {...LoginButtonType}
        title="로그인"
        onClick={handleLoginClick}
      />
      <Footer>
        <p>아이디/비밀번호 찾기</p>
        <p>회원가입</p>
      </Footer>
    </LoginContainer>
  );
};

export default withRouter(LoginInput);
