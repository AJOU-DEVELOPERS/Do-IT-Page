import { useRecoilValue } from "recoil";
import {
  BoardContainer,
  BoardPreviewContainer,
  ContentContainer,
} from "./style";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/BoardPreview";
import { ContentType } from "@Type/.";
import { useHistory } from "react-router-dom";
import React from "react";

const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");

  const {
    pageSrc,
    apiSrc,
    previewSize,
    previewType,
    alignPreview = "column;",
  } = _BOARD_INFOS[boardName];


  const history = useHistory();
  const boardContents =
    hasBoardContent(apiSrc, boardName) && useRecoilValue<ContentType[]>(BoardContentSelector(apiSrc));

  // 재사용으로 빼고싶음 // Molecules/Boardpage/List/index.tsx
  const handleDetailMove = (e: any) => {
    const target = e.target.closest(`#${boardName}`);
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const { pageSrc: path } = _BOARD_INFOS[boardName];
    const nextPath = idx ? `${path}/${idx}` : path;
    history.push(nextPath);
  };

  return (
    <BoardContainer boardName={_boardName}>
      {boardName !== "이미지" && (
        <>
          <ContentTitle title={boardName} />
          <ContentContainer
            alignPreview={alignPreview}
            onClick={handleDetailMove}
          >
            {boardContents?.slice(0, previewSize).map((content) => (
              <BoardPreviewContainer
                key={content.idx}
                data-idx={content.idx}
                id={boardName}
              >
                <BoardPreview previewType={previewType} content={content} />
              </BoardPreviewContainer>
            ))}
          </ContentContainer>
        </>
      )}
    </BoardContainer>
  );
};

export default BoardContent;
