import { _BOARD_INFOS } from "@Constant/.";
import BoardPreview from "@Molecules/BoardPreview";
import {
  BoardContentOneBoardSelector,
  BoardContentPagenationSelector,
} from "@Recoil/BoardContent";
import { ContentType, DetailViewType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PhotoDetail from "../Detail";
import { ContentContainer, BoardContainer } from "./style";

const PhotoList = ({ type, pageNum }: { type: string; pageNum: number }) => {
  const { apiSrc, previewType, viewSize } = _BOARD_INFOS[type];
  const history = useHistory();
  const [detailView, setDetailView] = useState<number | null>(null);

  const boardContents =
    hasBoardContent(apiSrc, type) &&
    useRecoilValue<ContentType[]>(
      BoardContentPagenationSelector([pageNum, apiSrc, viewSize])
    );

  const boardType = type === "사진첩" ? "image" : "image";

  const handleDetailMove = (e: any) => {
    const target = e.target.closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    setDetailView(idx);
  };

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
          {detailView && (
            <PhotoDetail
              apiSrc={apiSrc}
              detailView={detailView}
              setDetailView={setDetailView}
            />
          )}
        </ContentContainer>
      </Suspense>
    </>
  );
};

export default PhotoList;
