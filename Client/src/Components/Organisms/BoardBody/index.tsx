import { Route, Routes } from "react-router-dom";
import BoardList from "@Molecules/Board/BoardPage/List";
import { BoardListContainer, TitleContainer } from "./styles";
import BoardDetailBody from "./Detail";
import { _BOARD_INFOS } from "@Constant/.";

const BoardBody = ({ type }: { type: string }) => {
  const { pageSrc } = _BOARD_INFOS[type];
  return (
    <>
      <TitleContainer>{type}</TitleContainer>
      <BoardListContainer>
        <Routes>
          <Route path="" element={<BoardList type={type} />} />
          <Route path=":id" element={<BoardDetailBody type={type} />} />
        </Routes>
      </BoardListContainer>
    </>
  );
};

export default BoardBody;
