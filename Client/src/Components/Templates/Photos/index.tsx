import { _BOARD_INFOS } from "@Constant/.";
import Footer from "@Molecules/BoardPage/Footer";
import PhotoList from "@Organisms/Photos/List";
import { TitleContainer } from "@Organisms/BoardBody/styles";
import Header from "@Organisms/Header";
import { GetBoardContentLengthSelector } from "@Recoil/BoardContent";
import { hasBoardContent } from "@Util/.";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Container } from "./style";

const PhotosTemplate = () => {
  const type = "사진첩";
  const [pageNum, setPageNum] = useState<number>(0);
  const { apiSrc } = _BOARD_INFOS[type];

  const totalBoardContentLength =
    (hasBoardContent(apiSrc, type) &&
      useRecoilValue<number>(GetBoardContentLengthSelector(apiSrc))) ??
    1;
  return (
    <>
      <Header />
      <TitleContainer>{type}</TitleContainer>
      <Container>
        <PhotoList type={type} pageNum={pageNum} />
        <Footer
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalBoardContentLength={totalBoardContentLength}
        />
      </Container>
    </>
  );
};

export default PhotosTemplate;
