import Logo from "@Atoms/Logo";
import { LeftContainer, Title } from "./style";

const HeaderLeftSide = () => {
  return (
    <LeftContainer>
      <Logo url="/Logo.svg" alt="Logo" />
      <Title>Do-IT</Title>
    </LeftContainer>
  );
};

export default HeaderLeftSide;
