import { useReducer } from "react";
import CalendarBody from "@Organisms/Reserve/ReserveCalendar/Body";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { ROOM_BOARD_URL } from "@Constant/.";
import CalendarHeader from "@Organisms/Reserve/ReserveCalendar/Header";
import { dateReducer } from "@src/Hook/test";
import { getYearMonth } from "@Util/.";

const Calendar = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());
  const history = useHistory();

  const handleCalendarMove = (e: any) => {
    e.stopPropagation();
    history.push(ROOM_BOARD_URL);
  };

  return (
    <Container onClickCapture={handleCalendarMove}>
      <CalendarHeader {...date} setDate={setDate} />
      <CalendarBody {...date} />
    </Container>
  );
};

// export default Calendar;

export default Calendar;
