import { Container, Text } from "./style";
import { BoardContentType } from "@Type/.";

const BasicBoardPreview = ({ title, date, onClick }: BoardContentType) => {
  return (
    <Container onClick={onClick}>
      <Text>{`• ${title}`}</Text>
      <Text>{date}</Text>
    </Container>
  );
};

export default BasicBoardPreview;
