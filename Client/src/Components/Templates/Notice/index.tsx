import Header from "@Organisms/Common/Header";
import BoardBody from "@Organisms/BoardBody";
import { handleHeaderClick } from "@Util/.";
import { useNavigate } from "react-router-dom";

const NoticeTemplate = () => {
  const navigator = useNavigate();
  return (
    <>
      <Header onClick={() => handleHeaderClick(navigator)} />
      <BoardBody type="공지사항" />
    </>
  );
};

export default NoticeTemplate;
