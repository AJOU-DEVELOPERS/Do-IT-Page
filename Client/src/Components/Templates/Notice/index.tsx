import Header from "@Organisms/Header";
import { withRouter } from "react-router-dom";
import { History } from "history";
import BoardBody from "@Organisms/BoardBody";

const NoticeTemplate = ({ history }: { history: History }) => {
  const handleHeaderClick = () => {
    history.push("/main");
  };
  return (
    <>
      <Header onClick={handleHeaderClick} />
      <BoardBody type="공지사항" />
    </>
  );
};

export default withRouter(NoticeTemplate);
