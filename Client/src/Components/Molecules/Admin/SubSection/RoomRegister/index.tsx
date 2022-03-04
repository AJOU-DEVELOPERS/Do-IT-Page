import { useReducer } from "react";
import { useRecoilValue } from "recoil";
import { ReserveCalendarContainer } from "@Organisms/Reserve/Body/styles";
import CalendarBody from "@Organisms/Reserve/ReserveCalendar/Body";
import CalendarHeader from "@Organisms/Reserve/ReserveCalendar/Header";
import {
  getReservationAcceptSelector,
  getReservationProcessingSelector,
} from "@Recoil/Reservation";
import { dateReducer } from "@src/Hook/test";
import { postReservationRoomBodyProps } from "@Type/API";
import { getYearMonth } from "@Util/.";
import RoomRegisterList from "./List";
import { ReservationContainer } from "./styles";

const RoomRegisterContainer = () => {
  const [date, setDate] = useReducer(dateReducer, getYearMonth());
  const data = useRecoilValue<postReservationRoomBodyProps[]>(
    getReservationAcceptSelector(date)
  );
  const list = useRecoilValue<postReservationRoomBodyProps[]>(
    getReservationProcessingSelector(date)
  );

  const handleCalendarClick = (e: any) => e.stopPropagation();
  return (
    <>
      <CalendarHeader {...date} setDate={setDate} />
      <RoomRegisterList list={list} />
      <ReservationContainer onClick={handleCalendarClick}>
        <CalendarBody {...date} data={data} />
      </ReservationContainer>
    </>
  );
};

export default RoomRegisterContainer;
