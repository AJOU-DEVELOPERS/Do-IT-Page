import BoardBody from "@Organisms/BoardBody";
import Header from "@Organisms/Header";
import { withRouter } from "react-router-dom";
import { History } from "history";

const BoardTemplate = ({ history }: { history: History }) => {
  const handleHeaderClick = () => {
    history.push("/main");
  };
  return (
    <>
      <Header onClick={handleHeaderClick} />
      <BoardBody type="자유게시판" />
    </>
  );
};

export default withRouter(BoardTemplate);
