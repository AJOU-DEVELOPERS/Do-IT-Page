import { TitleContainer } from "@Organisms/BoardBody/styles";
import ReserveBox from "../ReserveBox";
import ReserveCalendar from "../ReserveCalendar";
import {
  ReserveBodyContainer,
  ReserveCalendarContainer,
  ReserveBoxContainer,
} from "./styles";

const ReserveBody = () => {
  return (
    <>
      <TitleContainer>과방 대여</TitleContainer>
      <ReserveBodyContainer>
        <ReserveCalendarContainer>
          <ReserveCalendar />
        </ReserveCalendarContainer>
        <ReserveBoxContainer>
          <ReserveBox />
        </ReserveBoxContainer>
      </ReserveBodyContainer>
    </>
  );
};

export default ReserveBody;
