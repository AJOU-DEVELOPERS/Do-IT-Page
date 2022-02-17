import { Container, Title } from "./style";
import StyledLink from "@Atoms/StyledLink";

interface Props {
  boardName: string;
  text?: string;
}

const BoardTitle = ({ boardName, text = ">" }: Props) => {
  return (
    <Container>
      <Title>{boardName}</Title>
      <StyledLink to="/">{text}</StyledLink>
    </Container>
  );
};

export default BoardTitle;
