import { useReducer } from "react";
import CalendarBody from "@Organisms/Reserve/ReserveCalendar/Body";
import { Container } from "./style";
import CalendarHeader from "@Organisms/Reserve/ReserveCalendar/Header";
import { dateReducer } from "@src/Hook/test";
import { getYearMonth } from "@Util/.";

const Calendar = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());

  return (
    <Container>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} />
    </Container>
  );
};

export default Calendar;
