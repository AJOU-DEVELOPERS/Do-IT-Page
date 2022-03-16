import { ContentImg } from "@Atoms/ContentImg/styles";
import ContentText from "@Atoms/ContentText/.";
import ContentTitle from "@Molecules/Content/ContentTitle";
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
        src="http://localhost:3000/제니.jpeg"
        alt={`${title} logo image`}
        width="80%"
        radius="5px"
        maxWidth={type === "detail" ? "60%" : "100%"}
        loading="lazy"
      />
      <ContentTitle title={title} text={date} type="small" />
      <ContentText type="preview" text={text} />
    </Container>
  );
};

export default ImageBoardPreview;
