import { Route } from "react-router-dom";
import BoardList from "@Molecules/BoardPage/List";
import { BoardListContainer, TitleContainer } from "./styles";
import BoardDetailBody from "./Detail";

const BoardBody = ({ type }: { type: string }) => {
  const path = type === "공지사항" ? "/notice" : "/board";
  return (
    <>
      <TitleContainer>{type}</TitleContainer>
      <BoardListContainer>
        <Route path={path} render={() => <BoardList type={type} />} exact />
        <Route
          path={path + "/:id"}
          render={() => <BoardDetailBody type={type} />}
          exact
        />
      </BoardListContainer>
    </>
  );
};

export default BoardBody;
