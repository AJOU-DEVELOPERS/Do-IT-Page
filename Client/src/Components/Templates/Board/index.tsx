import BoardBody from "@Organisms/BoardBody";
import Header from "@Organisms/Common/Header";
import { handleHeaderClick } from "@Util/.";
import { useNavigate } from "react-router-dom";

const BoardTemplate = () => {
  const navigator = useNavigate();
  return (
    <>
      <Header onClick={() => handleHeaderClick(navigator)} />
      <BoardBody type="자유게시판" />
    </>
  );
};

export default BoardTemplate;
