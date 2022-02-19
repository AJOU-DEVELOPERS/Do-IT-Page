import CalendarDate from "@Molecules/CalendarDate";
import { dateReducer, useChangeCalendarView } from "@src/Hook/test";
import TUICalendar from "@toast-ui/react-calendar";
import { getYearMonth } from "@Util/.";
import { useEffect, useReducer, useRef } from "react";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { Container } from "./style";
import { CALENDAR_THEME } from "@Style/.";
import { changeCalendarHeight } from "./util";
import { CALENDAR_OPTION } from "@Style/calendar";

const Calendar = () => {
  const [dateState, dateDispatch] = useReducer(dateReducer, getYearMonth());
  const calendarRef = useRef<any>(null);

  useChangeCalendarView(calendarRef, "month");
  useEffect(() => {
    changeCalendarHeight(calendarRef.current, "60%");
  }, []);

  const handleMonthIncrement = () => {
    dateDispatch({ type: "increment" });
    calendarRef.current?.getInstance().next();
    changeCalendarHeight(calendarRef.current, "60%");
  };

  const handleMonthDecrement = () => {
    dateDispatch({ type: "decrement" });
    calendarRef.current?.getInstance().prev();
    changeCalendarHeight(calendarRef.current, "60%");
  };

  return (
    <Container>
      <CalendarDate
        {...{ ...dateState, handleMonthIncrement, handleMonthDecrement }}
      />
      <TUICalendar ref={calendarRef} {...CALENDAR_OPTION} />
    </Container>
  );
};

export default Calendar;
