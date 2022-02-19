import { Container, Title, Text } from "./style";
import StyledLink from "@Atoms/StyledLink";
import { _BOARD_INFOS } from "@Constant/.";

interface Props {
  title: string;
  text?: string;
  type?: string;
}

const ContentTitle = ({ title, text = ">", type = "basic" }: Props) => {
  const pageSrc = _BOARD_INFOS[title]?.pageSrc;
  console.log(pageSrc);
  return (
    <Container>
      <Title type={type}>{title}</Title>
      {text === ">" ? (
        <StyledLink to={pageSrc}>{text}</StyledLink>
      ) : (
        <Text type={type}>{text}</Text>
      )}
    </Container>
  );
};

export default ContentTitle;
