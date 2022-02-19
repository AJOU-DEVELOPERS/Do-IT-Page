import { useRecoilValue } from "recoil";
import { BoardContainer, ContentContainer } from "./style";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { _BOARD_INFOS } from "@Constant/.";
import { hasBoardContent } from "@Util/.";
import BoardPreview from "@Molecules/BoardPreview";
import { ContentType } from "@Type/.";
import { useHistory, withRouter } from "react-router-dom";

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
                onClick={() => {
                  console.log(123);
                  history.push(`/${pageSrc}/${content.index}`);
                }}
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
