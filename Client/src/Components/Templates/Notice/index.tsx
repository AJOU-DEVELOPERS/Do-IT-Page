import Header from "@Organisms/Header";
import { withRouter } from "react-router-dom";
import { History } from "history";
import BoardBody from "@Organisms/BoardBody";
import { handleHeaderClick } from "@Util/.";

const NoticeTemplate = ({ history }: { history: History }) => {
  return (
    <>
      <Header onClick={() => handleHeaderClick(history)} />
      <BoardBody type="공지사항" />
    </>
  );
};

export default withRouter(NoticeTemplate);
