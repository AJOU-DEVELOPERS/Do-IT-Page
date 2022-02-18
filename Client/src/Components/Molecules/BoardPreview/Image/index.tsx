import { ContentImg } from "@Atoms/ContentImg/styles";
import ContentText from "@Atoms/ContentText/.";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentType } from "@Type/.";
import { Container } from "./style";

const ImageBoardPreview = ({ images, title, text, date }: BoardContentType) => {
  return (
    <Container>
      <ContentImg
        url={images[0]}
        alt={`${title} logo image`}
        width="80%"
        radius="5px"
      />
      <ContentTitle title={title} text={date} type="small" />
      <ContentText type="preview" text={text} />
    </Container>
  );
};

export default ImageBoardPreview;
