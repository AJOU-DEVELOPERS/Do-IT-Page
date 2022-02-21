import { ContentImg } from "@Atoms/ContentImg/styles";
import ContentText from "@Atoms/ContentText/.";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentType } from "@Type/.";
import { Container } from "./style";

interface Props {
  type?: string;
}
const ImageBoardPreview = ({
  images,
  title,
  text,
  date,
  type = "preview",
}: BoardContentType & Props) => {
  return (
    <Container type={type}>
      <ContentImg
        url={images[0]}
        alt={`${title} logo image`}
        width="80%"
        radius="5px"
        maxWidth={type === "detail" ? "60%" : "100%"}
      />
      <ContentTitle title={title} text={date} type="small" />
      <ContentText type="preview" text={text} />
    </Container>
  );
};

export default ImageBoardPreview;
