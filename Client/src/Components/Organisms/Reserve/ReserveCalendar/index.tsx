import { dateReducer } from "@src/Hook/test";
import { getYearMonth } from "@Util/.";
import { useReducer } from "react";
import CalendarBody from "./Body";
import CalendarHeader from "./Header";
import { ReserveCalendarContainer, ReserveCalendarTitle } from "./styles";

const ReserveCalendar = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());

  return (
    <ReserveCalendarContainer>
      <ReserveCalendarTitle>대여 현황</ReserveCalendarTitle>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} />
    </ReserveCalendarContainer>
  );
};

export default ReserveCalendar;
