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
import { useHistory } from "react-router-dom";

const BoardList = ({ type }: { type: string }) => {
  const { apiSrc, previewType, alignPreview = "column;" } = _BOARD_INFOS[type];
  const [noticePageNum, setNoticePageNum] = useState<number>(0);
  const history = useHistory();

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

  const handleNoticeDetailMove = (e: any) => {
    const target = e.target.closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const path = type === "공지사항" ? "notice" : "board";
    history.push(`/${path}/${idx}`);
  };

  return (
    <>
      <Suspense fallback={null}>
        <ContentContainer
          alignPreview={alignPreview}
          onClick={handleNoticeDetailMove}
        >
          {boardContents?.map((content) => (
            <BoardContainer
              key={content.idx}
              data-idx={content.idx}
              id="boardContainer"
            >
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