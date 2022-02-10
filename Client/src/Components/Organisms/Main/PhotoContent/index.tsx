import { GET_PHOTO_CONTENT_URL } from "@Constant/.";
import ContentTitle from "@Molecules/ContentTitle";
import PhotoCard from "@Molecules/PhotoCard";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { BoardContentType } from "@Type/.";
import { useRecoilValue } from "recoil";
import { ContenTitleContainer, ContentContainer } from "./style";

const PhotoContent = () => {
  const photoContents = useRecoilValue<BoardContentType[]>(
    BoardContentSelector(GET_PHOTO_CONTENT_URL)
  );

  const handleMoreInfoClick = () => {};

  return (
    <>
      <ContenTitleContainer>
        <ContentTitle title="우리들의 사진" onClick={handleMoreInfoClick} />
      </ContenTitleContainer>
      <ContentContainer>
        {photoContents.slice(0, 8).map(({ images, title }) => (
          <PhotoCard url={images[0]} alt={title} />
        ))}
      </ContentContainer>
    </>
  );
};

export default PhotoContent;
