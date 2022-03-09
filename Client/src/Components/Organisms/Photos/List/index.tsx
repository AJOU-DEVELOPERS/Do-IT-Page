import { _BOARD_INFOS } from "@Constant/.";
import BoardPreview from "@Molecules/Board/BoardPreview";
import { BoardContentPagenationSelector } from "@Recoil/BoardContent";
import { BoardContentType, ContentType, ProjectContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { ContentContainer, BoardContainer } from "./style";

const PhotoList = ({ type, pageNum }: { type: string; pageNum: number }) => {
  const { apiSrc, previewType, viewSize, pageSrc } = _BOARD_INFOS[type];
  const navigator = useNavigate();

  const boardContents = hasBoardContent(apiSrc, type) && useRecoilValue<ContentType[]>(BoardContentPagenationSelector([pageNum, apiSrc, viewSize]));

  const boardType = type === "사진첩" ? "image" : "image";

  const handleDetailMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const nextPath = `${pageSrc}/${idx}`;
    navigator(nextPath);
  };

  return (
    <>
      <Suspense fallback={null}>
        <ContentContainer onClick={handleDetailMove}>
          {boardContents?.map((content) => {
            const key = (content as ProjectContentType).projectIdx ?? (content as BoardContentType).idx;
            return (
              <BoardContainer key={key} data-idx={key} id="boardContainer">
                <BoardPreview previewType={previewType} content={content} type={boardType} />
              </BoardContainer>
            );
          })}
        </ContentContainer>
      </Suspense>
    </>
  );
};

export default PhotoList;
