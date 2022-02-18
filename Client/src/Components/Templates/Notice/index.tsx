import Header from "@Organisms/Header";
import { withRouter } from "react-router-dom";
import { History } from "history";
import NoticeBody from "@Organisms/NoticeBody";

const NoticeTemplate = ({ history }: { history: History }) => {
  const handleHeaderClick = () => {
    history.push("/main");
  };
  return (
    <>
      <Header onClick={handleHeaderClick} />
      <NoticeBody />
    </>
  );
};

export default withRouter(NoticeTemplate);
