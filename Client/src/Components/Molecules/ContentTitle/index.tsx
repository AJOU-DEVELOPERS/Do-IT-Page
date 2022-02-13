import { Container, Title, Text } from "./style";

interface Props {
  title: string;
  text?: string;
  onClick?: () => void;
}

const ContentTitle = ({ title, text = "더보기 >", onClick }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text onClick={onClick}>{text}</Text>
    </Container>
  );
};

export default ContentTitle;
