import { useRecoilValue } from "recoil";
import { BoardContainer, ContentContainer } from "./style";
import BoardTitle from "@Molecules/BoardTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/BoardPreview";
import { PreviewContentType } from "@Type/.";

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
    useRecoilValue<PreviewContentType[]>(BoardContentSelector(apiSrc));

  return (
    <BoardContainer boardName={_boardName}>
      {boardName !== "이미지" && (
        <>
          <BoardTitle boardName={boardName} />
          <ContentContainer alignPreview={alignPreview}>
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
