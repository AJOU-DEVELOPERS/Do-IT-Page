import Header from "@Organisms/Common/Header";
import ReserveBody from "@Organisms/Reserve/Body";
import { handleHeaderClick } from "@Util/.";
import { useNavigate } from "react-router-dom";

const ReserveTemplate = () => {
  const navigator = useNavigate();
  return (
    <>
      <Header onClick={() => handleHeaderClick(navigator)} />
      <ReserveBody />
    </>
  );
};

export default ReserveTemplate;
