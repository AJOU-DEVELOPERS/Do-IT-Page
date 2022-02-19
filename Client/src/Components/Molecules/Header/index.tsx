import Logo from "@Atoms/Logo";
import { useHistory } from "react-router-dom";
import { LeftContainer, Title } from "./style";

const HeaderLeftSide = () => {
  const history = useHistory();
  const handleLogoClick = () => history.push("/main");
  return (
    <LeftContainer>
      {/* <Logo url="/assets/Header/Logo.svg" alt="Logo" /> */}
      <Title onClick={handleLogoClick}>Do-IT</Title>
    </LeftContainer>
  );
};

export default HeaderLeftSide;
