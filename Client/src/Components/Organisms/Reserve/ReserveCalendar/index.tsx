import { getReservationAcceptSelector } from "@Recoil/Reservation";
import { dateReducer } from "@src/Hook/test";
import { postReservationRoomBodyProps } from "@Type/API";
import { getYearMonth } from "@Util/.";
import { useReducer } from "react";
import { useRecoilValue } from "recoil";
import CalendarBody from "./Body";
import CalendarHeader from "./Header";
import { ReserveCalendarContainer, ReserveCalendarTitle } from "./styles";

const ReserveCalendar = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());
  const data = useRecoilValue<postReservationRoomBodyProps[]>(
    getReservationAcceptSelector(date)
  );

  return (
    <ReserveCalendarContainer>
      <ReserveCalendarTitle>대여 현황</ReserveCalendarTitle>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} data={data} />
    </ReserveCalendarContainer>
  );
};

export default ReserveCalendar;
