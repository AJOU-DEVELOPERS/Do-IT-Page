import Button from "@Atoms/Button";
import { _BOARD_INFOS } from "@Constant/.";
import BoardPageDetail from "@Molecules/BoardPage/Detail";
import { BoardContentOneBoardSelector } from "@Recoil/BoardContent";
import { SmallButtonType } from "@Style/.";
import { BoardContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ButtonContainer, DetailContainer } from "./styles";

const BoardDetailBody = ({ type }: { type: string }) => {
  const { id } = useParams<{ id: string }>();
  const { boardApiSrc, pageSrc } = _BOARD_INFOS[type];
  const history = useHistory();

  const content =
    (hasBoardContent(boardApiSrc ?? "", type) &&
      useRecoilValue<BoardContentType[]>(
        BoardContentOneBoardSelector([Number(id), boardApiSrc ?? ""])
      )) ??
    [];

  const handleListClick = () => {
    history.push(pageSrc);
  };

  if (content.length > 1) return null;
  const { title, date, visitor, text } = content[0];
  return (
    <>
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
      <ButtonContainer>
        <Button
          onClick={handleListClick}
          {...SmallButtonType}
          borderColor="#00000029"
          title="목록"
        />
      </ButtonContainer>
    </>
  );
};

export default BoardDetailBody;
