import { DateAction } from "@Type/.";
import { postReservationRoomBodyProps } from "@Type/API";
import { Dispatch } from "react";
import { CalendarHeaderContainer } from "./styles";

export interface DateProps {
  year: number;
  month: number;
}

export interface CalendarBodyProps extends DateProps {
  data: postReservationRoomBodyProps[];
}
interface HeaderProps extends DateProps {
  setDate: Dispatch<DateAction>;
}

const CalendarHeader = ({ year, month, setDate }: HeaderProps) => {
  const handleMinusMonth = () => setDate({ type: "decrement" });
  const handlePlusMonth = () => setDate({ type: "increment" });
  return (
    <CalendarHeaderContainer>
      <span onClick={handleMinusMonth}>{"<"}</span>
      <span>
        {year}.{month}.
      </span>
      <span onClick={handlePlusMonth}>{">"}</span>
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
