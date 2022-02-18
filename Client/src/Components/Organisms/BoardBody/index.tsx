import BoardList from "../../Molecules/BoardPage/List";
import { BoardListContainer, TitleContainer } from "./styles";

const BoardBody = ({ type }: { type: string }) => {
  return (
    <>
      <TitleContainer>{type}</TitleContainer>
      <BoardListContainer>
        <BoardList type={type} />
      </BoardListContainer>
    </>
  );
};

export default BoardBody;
