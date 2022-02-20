import {
  BoardListContainer,
  TitleContainer,
} from "@Organisms/BoardBody/styles";
import ReserveBox from "../ReserveBox";
import ReserveCalendar from "../ReserveCalendar";

const ReserveBody = () => {
  return (
    <>
      <TitleContainer>과방 대여</TitleContainer>
      <BoardListContainer>
        <ReserveCalendar />
        <ReserveBox />
      </BoardListContainer>
    </>
  );
};

export default ReserveBody;
