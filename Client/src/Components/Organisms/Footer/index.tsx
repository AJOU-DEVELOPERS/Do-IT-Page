import { INTRODUCTION, MANAGER_INFO } from "@Constant/.";
import { Container, ContentContainer, Title, Text } from "./style";

const Footer = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Do-it</Title>
        <Text>{INTRODUCTION}</Text>
      </ContentContainer>
      <ContentContainer>
        <Title>임원진</Title>
        <Text>{MANAGER_INFO}</Text>
      </ContentContainer>
    </Container>
  );
};
export default Footer;
