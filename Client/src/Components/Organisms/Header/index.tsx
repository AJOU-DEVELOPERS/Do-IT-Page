import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import { SmallLoginButtonType } from "@Constant/.";

import Button from "@Atoms/Button";
import Container from "./styles";
import HeaderLeftSide from "@Molecules/Header";

const Header = ({ history }: { history: History }) => {
  const handleLoginClick = useCallback(() => {
    history.push("/login");
  }, []);

  return (
    <Container>
      <HeaderLeftSide />
      <Button
        {...SmallLoginButtonType}
        title="로그인"
        onClick={handleLoginClick}
      />
    </Container>
  );
};

export default withRouter(Header);
