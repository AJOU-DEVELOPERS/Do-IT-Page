import { DateProps } from "@Type/.";
import { Button, Date, Container } from "./style";

interface Props extends DateProps {
  handleMonthIncrement: () => void;
  handleMonthDecrement: () => void;
}
const CalendarDate = ({
  year,
  month,
  handleMonthIncrement,
  handleMonthDecrement,
}: Props) => {
  return (
    <Container>
      <Button onClick={handleMonthDecrement}>{"<"}</Button>
      <Date>{`${year}년 ${month}월`}</Date>
      <Button onClick={handleMonthIncrement}>{">"}</Button>
    </Container>
  );
};

export default CalendarDate;
