import { Dispatch, SetStateAction } from "react";
import { CalendarHeaderContainer } from "./styles";

export interface DateProps {
  year: number;
  month: number;
}

interface HeaderProps extends DateProps {
  setDate: Dispatch<SetStateAction<DateProps>>;
}

const CalendarHeader = ({ year, month, setDate }: HeaderProps) => {
  const handleMinusMonth = () => {
    setDate((prev: DateProps) => {
      return {
        ...prev,
        month: prev.month - 1,
      };
    });
  };
  const handlePlusMonth = () => {
    setDate((prev: DateProps) => {
      return {
        ...prev,
        month: prev.month + 1,
      };
    });
  };
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
