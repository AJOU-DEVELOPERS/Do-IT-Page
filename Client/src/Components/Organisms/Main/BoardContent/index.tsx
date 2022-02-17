import { useRecoilValue } from "recoil";
import { BoardContainer, ContenTitleContainer } from "./style";
import BoardTitle from "@Molecules/BoardTitle";
const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");
  return (
    <BoardContainer boardName={_boardName}>
      <BoardTitle boardName={boardName} />
    </BoardContainer>
  );
};
export default BoardContent;
