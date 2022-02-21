import { Route } from "react-router-dom";
import BoardList from "@Molecules/BoardPage/List";
import { BoardListContainer, TitleContainer } from "./styles";
import BoardDetailBody from "./Detail";
import { _BOARD_INFOS } from "@Constant/.";

const BoardBody = ({ type }: { type: string }) => {
  const { pageSrc } = _BOARD_INFOS[type];
  return (
    <>
      <TitleContainer>{type}</TitleContainer>
      <BoardListContainer>
        <Route path={pageSrc} render={() => <BoardList type={type} />} exact />
        <Route
          path={pageSrc + "/:id"}
          render={() => <BoardDetailBody type={type} />}
          exact
        />
      </BoardListContainer>
    </>
  );
};

export default BoardBody;
