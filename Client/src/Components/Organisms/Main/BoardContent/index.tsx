import { useRecoilValue } from "recoil";
import { BoardContainer, ContentContainer } from "./style";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/BoardPreview";
import { ContentType } from "@Type/.";

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

  return (
    <BoardContainer boardName={_boardName}>
      {boardName !== "이미지" && (
        <>
          <ContentTitle title={boardName} />
          <ContentContainer alignPreview={alignPreview}>
            {boardContents?.slice(0, previewSize).map((content, idx) => (
              <BoardPreview
                previewType={previewType}
                content={content}
                key={`${idx} ${boardName} content`}
              />
            ))}
          </ContentContainer>
        </>
      )}
    </BoardContainer>
  );
};

export default BoardContent;
