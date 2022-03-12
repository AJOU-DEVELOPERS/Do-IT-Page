import Header from "@Organisms/Common/Header";
import ReserveBody from "@Organisms/Reserve/Body";
import { handleHeaderClick } from "@Util/.";
import { withRouter } from "react-router-dom";
import { History } from "history";

const ReserveTemplate = ({ history }: { history: History }) => {
  return (
    <>
      <Header onClick={() => handleHeaderClick(history)} />
      <ReserveBody />
    </>
  );
};

export default withRouter(ReserveTemplate);
