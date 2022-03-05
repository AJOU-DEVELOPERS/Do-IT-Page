import { MAIN_URL, BEFORE_URL } from "@Constant/.";
import { userInfo } from "@Type/Account";
import { useNavigate } from "react-router-dom";

import { LeftContainer, Title } from "./style";

const HeaderLeftSide = ({ user }: { user: boolean | userInfo }) => {
  const navigator = useNavigate();

  const handleMoveHome = () => {
    const path = user ? MAIN_URL : BEFORE_URL;
    navigator(path);
  };
  return (
    <LeftContainer>
      <Title onClick={handleMoveHome} style={{ color: user ? "" : "#ffffff" }}>
        Do-IT
      </Title>
    </LeftContainer>
  );
};

export default HeaderLeftSide;
