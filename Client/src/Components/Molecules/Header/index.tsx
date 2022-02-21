import { MAIN_URL, BEFORE_URL } from "@Constant/.";
import { useHistory } from "react-router-dom";
import { LeftContainer, Title } from "./style";

const HeaderLeftSide = ({ user }: { user: boolean }) => {
  const history = useHistory();

  const handleMoveHome = () => {
    const path = user ? MAIN_URL : BEFORE_URL;
    history.push(path);
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
