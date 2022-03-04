import { MAIN_URL, BEFORE_URL } from "@Constant/.";
import { useNavigate } from "react-router-dom";

import { LeftContainer, Title } from "./style";

const HeaderLeftSide = ({ user }: { user: boolean }) => {
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
