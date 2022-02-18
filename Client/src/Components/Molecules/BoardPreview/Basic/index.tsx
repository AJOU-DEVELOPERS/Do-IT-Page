import { Container, Text } from "./style";
import { BoardContentType } from "@Type/.";

const BasicBoardPreview = ({ title, date }: BoardContentType) => {
  return (
    <Container>
      <Text>{`• ${title}`}</Text>
      <Text>{date}</Text>
    </Container>
  );
};

export default BasicBoardPreview;
