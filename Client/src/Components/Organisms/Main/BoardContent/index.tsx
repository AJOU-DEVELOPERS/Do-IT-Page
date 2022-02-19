import { useRecoilValue } from "recoil";
import { BoardContainer, ContentContainer } from "./style";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/BoardPreview";
import { ContentType } from "@Type/.";
import { useHistory } from "react-router-dom";

const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");
  const {
    apiSrc,
    previewSize,
    previewType,
    alignPreview = "column;",
  } = _BOARD_INFOS[boardName];

  const boardContents =
    hasBoardContent(apiSrc, boardName) &&
    useRecoilValue<ContentType[]>(BoardContentSelector(apiSrc));

  const history = useHistory();

  // 재사용으로 빼고싶음 // Molecules/Boardpage/List/index.tsx
  const handleDetailMove = (e: any) => {
    const target = e.target.closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const { pageSrc: path } = _BOARD_INFOS[boardName];
    history.push(`${path}/${idx}`);
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
              <BoardPreview previewType={previewType} content={content} />
            ))}
          </ContentContainer>
        </>
      )}
    </BoardContainer>
  );
};

export default BoardContent;
