import { _BOARD_INFOS } from "@Constant/.";
import BoardPreview from "@Molecules/BoardPreview";
import { BoardContentPagenationSelector } from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ContentContainer, BoardContainer } from "./style";

const PhotoList = ({ type, pageNum }: { type: string; pageNum: number }) => {
  const { apiSrc, previewType, viewSize } = _BOARD_INFOS[type];
  const history = useHistory();

  const boardContents =
    hasBoardContent(apiSrc, type) &&
    useRecoilValue<ContentType[]>(
      BoardContentPagenationSelector([pageNum, apiSrc, viewSize])
    );

  const handleDetailMove = (e: any) => {
    const target = e.target.closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const { pageSrc: path } = _BOARD_INFOS[type];
    history.push(`${path}/${idx}`);
  };

  const boardType = type === "사진첩" ? "image" : "image";

  return (
    <>
      <Suspense fallback={null}>
        <ContentContainer onClick={handleDetailMove}>
          {boardContents?.map((content) => (
            <BoardContainer
              key={content.idx}
              data-idx={content.idx}
              id="boardContainer"
            >
              <BoardPreview
                previewType={previewType}
                content={content}
                type={boardType}
              />
            </BoardContainer>
          ))}
        </ContentContainer>
      </Suspense>
    </>
  );
};

export default PhotoList;
