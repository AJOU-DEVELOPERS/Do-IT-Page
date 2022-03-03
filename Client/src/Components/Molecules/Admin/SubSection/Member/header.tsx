import { HeaderContainer, HeaderText } from "./styles";

const MemberInfoHeader = () => {
  return (
    <HeaderContainer>
      <HeaderText>이름</HeaderText>
      <HeaderText>아이디</HeaderText>
      <HeaderText>학번</HeaderText>
      <HeaderText>가입일</HeaderText>
    </HeaderContainer>
  );
};

export default MemberInfoHeader;
