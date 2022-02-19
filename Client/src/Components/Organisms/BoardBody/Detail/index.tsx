import { _BOARD_INFOS } from "@Constant/.";
import BoardPageDetail from "@Molecules/BoardPage/Detail";
import { BoardContentOneBoardSelector } from "@Recoil/BoardContent";
import { BoardContentType, ContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DetailContainer } from "./styles";

const BoardDetailBody = ({ type }: { type: string }) => {
  const { id } = useParams<{ id: string }>();
  const { boardApiSrc } = _BOARD_INFOS[type];

  const content =
    (hasBoardContent(boardApiSrc ?? "", type) &&
      useRecoilValue<BoardContentType[]>(
        BoardContentOneBoardSelector([Number(id), boardApiSrc ?? ""])
      )) ??
    [];

  if (content.length > 1) return null;
  const { title, date, visitor, text } = content[0];
  return (
    <DetailContainer>
      <Suspense fallback={null}>
        <BoardPageDetail
          title={title}
          date={date}
          visitor={visitor}
          text={text}
        />
      </Suspense>
    </DetailContainer>
  );
};

export default BoardDetailBody;
