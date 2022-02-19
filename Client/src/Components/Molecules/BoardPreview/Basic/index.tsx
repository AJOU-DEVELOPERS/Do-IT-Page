import { Container, Text, Date } from "./style";
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
  const enumText = type !== "basic" ? idx : "•";
  return (
    <Container>
      <Text>
        <span>{enumText}</span>
        {title}
      </Text>
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
