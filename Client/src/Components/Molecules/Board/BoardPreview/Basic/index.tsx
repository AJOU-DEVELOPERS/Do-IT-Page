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
        {type === "basic" && "โข"}
        {title}
      </Title>
      <Date>{date}</Date>
      {type !== "basic" && (
        <>
          <Text>์กฐํ์</Text>
          <Text>{visitor}</Text>
        </>
      )}
    </Container>
  );
};

export default BasicBoardPreview;
