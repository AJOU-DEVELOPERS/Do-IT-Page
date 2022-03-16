import { Container, Text, Date, Title } from "./style";
import { BoardContentType } from "@Type/.";

interface BasicBoardPreviewProps extends BoardContentType {
  type: string;
  idx: number;
}
const BasicBoardPreview = ({
  title,
  date,
  type,
  visitor,
  idx,
}: BasicBoardPreviewProps) => {
  return (
    <Container>
      <Title>
        {type !== "basic" && <span>{idx}</span>}
        {type === "basic" && "•"}
        {title}
      </Title>
      <Date>{date}</Date>
      {type !== "basic" && (
        <>
          <Text>조회수</Text>
          <Text>{visitor}</Text>
        </>
      )}
    </Container>
  );
};

export default BasicBoardPreview;
