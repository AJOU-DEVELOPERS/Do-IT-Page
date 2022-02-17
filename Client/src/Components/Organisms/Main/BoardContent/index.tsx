import { useRecoilValue } from "recoil";
import { BoardContainer, ContentContainer } from "./style";
import BoardTitle from "@Molecules/BoardTitle";
const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");
  return (
    <BoardContainer boardName={_boardName}>
      {boardName !== "이미지" && (
        <>
          <BoardTitle boardName={boardName} />
          <ContentContainer></ContentContainer>
        </>
      )}
    </BoardContainer>
  );
};
export default BoardContent;
