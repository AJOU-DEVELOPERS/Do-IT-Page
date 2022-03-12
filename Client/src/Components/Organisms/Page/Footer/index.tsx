import { useNavigate } from "react-router-dom";
import { PageFooterContainer, PageFooterText, PageFooterTitle } from "./styles";

const Footer = () => {
  const navigator = useNavigate();
  const handleBeforeMove = () => {
    navigator("/before");
  };
  return (
    <PageFooterContainer>
      <PageFooterText>작은 아이디어를 통해 꿈을 실현하는</PageFooterText>
      <PageFooterText>아주대학교 IT 중앙동아리</PageFooterText>
      <PageFooterTitle>Do-IT</PageFooterTitle>
      <PageFooterText onClick={handleBeforeMove} style={{ cursor: "pointer" }}>
        자세히 알아보기
      </PageFooterText>
    </PageFooterContainer>
  );
};

export default Footer;
