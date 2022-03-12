import { _BOARD_INFOS } from "@Constant/.";
import Footer from "@Molecules/Board/BoardPage/Footer";
import PhotoList from "@Organisms/Photos/List";
import { TitleContainer } from "@Organisms/BoardBody/styles";
import Header from "@Organisms/Common/Header";
import { GetBoardContentLengthSelector } from "@Recoil/BoardContent";
import { hasBoardContent } from "@Util/.";
import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { Container } from "./style";
import PhotoDetail from "@Organisms/Photos/Detail";
import { Route, Routes } from "react-router-dom";

const PhotosTemplate = () => {
  const type = "사진첩";

  const [pageNum, setPageNum] = useState<number>(0);
  const { apiSrc, viewSize } = _BOARD_INFOS[type];
  const totalBoardContentLength =
    (hasBoardContent(apiSrc, type) &&
      useRecoilValue<number>(
        GetBoardContentLengthSelector([apiSrc, viewSize])
      )) ??
    1;
  return (
    <>
      <Header />
      <TitleContainer>{type}</TitleContainer>
      <Container>
        {useMemo(
          () => (
            <PhotoList type={type} pageNum={pageNum} />
          ),
          [pageNum]
        )}
        <Footer
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalBoardContentLength={totalBoardContentLength}
        />
        <Routes>
          <Route path=":id" element={<PhotoDetail apiSrc={apiSrc} />} />
        </Routes>
      </Container>
    </>
  );
};

export default PhotosTemplate;
