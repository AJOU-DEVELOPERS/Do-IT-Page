import { useState } from "react";
import CalendarBody from "@Organisms/Reserve/ReserveCalendar/Body";
import { Container } from "./style";
import { useHistory } from "react-router-dom";
import { ROOM_BOARD_URL } from "@Constant/.";

const Calendar = () => {
  const [date, setDate] = useState({
    year: 2022,
    month: 2,
  });
  const history = useHistory();

  const handleCalendarMove = (e: any) => {
    e.stopPropagation();
    history.push(ROOM_BOARD_URL);
  };

  return (
    <Container onClickCapture={handleCalendarMove}>
      <CalendarBody {...date} />
    </Container>
  );
};

export default Calendar;
