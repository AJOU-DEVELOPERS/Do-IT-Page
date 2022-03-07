import { useRecoilValue } from "recoil";
import {
  BoardContainer,
  BoardPreviewContainer,
  ContentContainer,
} from "./style";
import ContentTitle from "@Molecules/Content/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/Board/BoardPreview";
import { BoardContentType, ContentType, ProjectContentType } from "@Type/.";
import { useNavigate } from "react-router-dom";

const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");
  const navigator = useNavigate();
  const {
    pageSrc,
    apiSrc,
    previewSize,
    previewType,
    alignPreview = "column;",
  } = _BOARD_INFOS[boardName];

  const boardContents =
    hasBoardContent(apiSrc, boardName) &&
    useRecoilValue<ContentType[]>(BoardContentSelector(apiSrc));
  // 재사용으로 빼고싶음 // Molecules/Boardpage/List/index.tsx

  const handleDetailMove = (e: any) => {
    const target = e.target.closest(`#${boardName}`);
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const { pageSrc: path } = _BOARD_INFOS[boardName];
    const nextPath = idx ? `${path}/${idx}` : path;
    navigator(nextPath);
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
            {boardContents?.slice(0, previewSize).map((content) => {
              const key =
                (content as ProjectContentType).projectIdx ??
                (content as ProjectContentType).studyIdx ??
                (content as BoardContentType).idx;
              return (
                <BoardPreviewContainer key={key} data-idx={key} id={boardName}>
                  <BoardPreview previewType={previewType} content={content} />
                </BoardPreviewContainer>
              );
            })}
          </ContentContainer>
        </>
      )}
    </BoardContainer>
  );
};

export default BoardContent;
