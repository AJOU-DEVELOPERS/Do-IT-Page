import { useRef } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { History } from "history";

import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";

import { LoginButtonType, LoginInputType } from "@Style/.";
import { Wrapper, Title, LoginContainer, Footer } from "./styles";
import { LoginClick } from "./util";

const LoginInput = () => {
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  const handleLoginClick = () => LoginClick({ idRef, pwRef, history });
  const handleRegisterClick = () => {
    history.push("/register");
  };
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Wrapper type={"id"}>
        <p>ID</p>
        <Input
          {...LoginInputType}
          placeholder="ID를 입력하세요."
          inputRef={idRef}
        />
      </Wrapper>
      <Wrapper type={"pwd"}>
        <p>PW</p>
        <Input
          {...LoginInputType}
          placeholder="패스워드를 입력하세요."
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
        <p onClick={handleRegisterClick}>회원가입</p>
      </Footer>
    </LoginContainer>
  );
};

export default withRouter(LoginInput);
