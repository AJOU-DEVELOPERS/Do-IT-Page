import BoardBody from "@Organisms/BoardBody";
import Header from "@Organisms/Common/Header";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { handleHeaderClick } from "@Util/.";

const BoardTemplate = ({ history }: { history: History }) => {
  return (
    <>
      <Header onClick={() => handleHeaderClick(history)} />
      <BoardBody type="자유게시판" />
    </>
  );
};

export default withRouter(BoardTemplate);
