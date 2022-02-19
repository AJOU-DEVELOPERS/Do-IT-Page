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

const calendars = [
  {
    id: "1",
    name: "My Calendar",
    color: "#ffffff",
    bgColor: "#9e5fff",
    dragBgColor: "#9e5fff",
    borderColor: "#9e5fff",
  },
];
const shedules = [
  {
    id: "1",
    calendarId: "1",
    title: "my schedule",
    category: "time",
    dueDateClass: "",
    start: "2022-02-18T22:30:00+09:00",
    end: "2022-02-19T02:30:00+09:00",
  },
];
const Calendar = ({ isReadOnly }: { isReadOnly: boolean }) => {
  const [dateState, dateDispatch] = useReducer(dateReducer, getYearMonth());
  const calendarRef = useRef<any>(null);

  useChangeCalendarView(calendarRef, "month");

  const handleMonthIncrement = () => {
    dateDispatch({ type: "increment" });
    calendarRef.current?.getInstance().next();
  };

  const handleMonthDecrement = () => {
    dateDispatch({ type: "decrement" });
    calendarRef.current?.getInstance().prev();
  };

  return (
    <Container>
      <CalendarDate
        {...{ ...dateState, handleMonthIncrement, handleMonthDecrement }}
      />
      <TUICalendar
        ref={calendarRef}
        {...CALENDAR_OPTION}
        isReadOnly={isReadOnly}
        calendars={calendars}
        schedules={shedules}
      />
    </Container>
  );
};

// export default Calendar;

export default Calendar;
