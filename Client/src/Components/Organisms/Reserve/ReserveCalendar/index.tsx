import { useState } from "react";
import CalendarBody from "./Body";
import CalendarHeader from "./Header";
import { ReserveCalendarContainer, ReserveCalendarTitle } from "./styles";

const ReserveCalendar = () => {
  const [date, setDate] = useState({
    year: 2022,
    month: 2,
  });

  return (
    <ReserveCalendarContainer>
      <ReserveCalendarTitle>대여 현황</ReserveCalendarTitle>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} />
    </ReserveCalendarContainer>
  );
};

export default ReserveCalendar;
