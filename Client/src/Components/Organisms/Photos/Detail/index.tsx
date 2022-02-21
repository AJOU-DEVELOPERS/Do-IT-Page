import ImageBoardPreview from "@Molecules/BoardPreview/Image";
import { BoardContentOneBoardSelector } from "@Recoil/BoardContent";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { useRecoilValue } from "recoil";
import { Container, ContentContainer, Button } from "./style";

interface Props {
  apiSrc: string;
  detailView: number;
  setDetailView: Dispatch<SetStateAction<number | null>>;
}
const PhotoDetail = ({ apiSrc, detailView, setDetailView }: Props) => {
  const modalRef = useRef(null);

  const [content] = useRecoilValue(
    BoardContentOneBoardSelector([detailView, apiSrc])
  );

  const handleOutSideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!modalRef.current) return;
    if (!(modalRef.current as HTMLElement).contains(e.target as Node))
      handleDetailClose();
  };

  const handleDetailClose = () => setDetailView(null);

  return (
    <Container onClick={handleOutSideClick}>
      <ContentContainer ref={modalRef}>
        <Button onClick={handleDetailClose}>x</Button>
        <ImageBoardPreview {...{ ...content, ...{ type: "detail" } }} />
      </ContentContainer>
    </Container>
  );
};

export default PhotoDetail;
