import { _BOARD_INFOS } from "@Constant/.";
import { ContentContainer } from "@Organisms/Main/BoardContent/style";
import {
  BoardContentPagenationSelector,
  BoardContentSelector,
  GetBoardContentLengthSelector,
} from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import BoardPreview from "@Molecules/BoardPreview";
import { BoardContainer } from "./styles";
import Footer from "../Footer";

const BoardList = ({ type }: { type: string }) => {
  const { apiSrc, previewType, alignPreview = "column;" } = _BOARD_INFOS[type];
  const [noticePageNum, setNoticePageNum] = useState<number>(0);

  const totalContents =
    (hasBoardContent(apiSrc, type) &&
      useRecoilValue<ContentType[]>(
        BoardContentPagenationSelector([noticePageNum, apiSrc])
      )) ??
    [];
  // const boardContents =
  //   hasBoardContent(apiSrc, type) &&
  //   useRecoilValue<ContentType[]>(
  //     BoardContentPagenationSelector([noticePageNum, apiSrc])
  //   );

  const boardContents = totalContents.filter(
    (item) =>
      item.idx > noticePageNum * 10 && item.idx <= (noticePageNum + 1) * 10
  );

  const totalBoardContentLength =
    (hasBoardContent(apiSrc, type) &&
      useRecoilValue<number>(GetBoardContentLengthSelector(apiSrc))) ??
    1;

  return (
    <>
      <Suspense fallback={null}>
        <ContentContainer alignPreview={alignPreview}>
          {boardContents?.map((content) => (
            <BoardContainer key={content.idx}>
              <BoardPreview
                previewType={previewType}
                content={content}
                type="게시판"
              />
            </BoardContainer>
          ))}
          <Footer
            noticePageNum={noticePageNum}
            setNoticePageNum={setNoticePageNum}
            totalBoardContentLength={totalBoardContentLength}
          />
        </ContentContainer>
      </Suspense>
    </>
  );
};

export default BoardList;
