import { Route, Routes } from "react-router-dom";
import BoardList from "@Molecules/Board/BoardPage/List";
import { BoardListContainer, TitleContainer } from "./styles";
import BoardDetailBody from "./Detail";

const BoardBody = ({ type }: { type: string }) => {
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
