import { useReducer } from "react";
import { useRecoilValue } from "recoil";
import { getReservationAcceptSelector } from "@Recoil/Reservation";
import { postReservationRoomBodyProps } from "@Type/API";
import CalendarBody from "@Organisms/Reserve/ReserveCalendar/Body";
import { Container } from "./style";
import CalendarHeader from "@Organisms/Reserve/ReserveCalendar/Header";
import { dateReducer } from "@src/Hook";
import { getYearMonth } from "@Util/.";

const Calendar = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());
  const data = useRecoilValue<postReservationRoomBodyProps[]>(
    getReservationAcceptSelector(date)
  );
  return (
    <Container>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} data={data} />
    </Container>
  );
};

export default Calendar;
