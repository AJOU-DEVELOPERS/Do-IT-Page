import CalendarDate from "@Molecules/CalendarDate";
import { dateReducer, useChangeCalendarView } from "@src/Hook/test";
import TUICalendar from "@toast-ui/react-calendar";
import { DateProps } from "@Type/.";
import { getYearMonth } from "@Util/.";
import { useEffect, useReducer, useRef, useState } from "react";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { Container } from "./style";

const Calendar = () => {
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
        view={"week"}
        ref={calendarRef}
        scheduleView
        taskView
        useDetailPopup
        useCreationPopup
        usageStatistics={false}
        height={"90%"}
        week={{
          daynames: ["일", "월", "화", "수", "목", "금", "토"],
        }}
      />
    </Container>
  );
};

export default Calendar;
