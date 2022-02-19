import {
  CalendarHeaderContainer,
  ReserveCalendarContainer,
  ReserveCalendarTitle,
} from "./styles";

const ReserveCalendar = () => {
  return (
    <ReserveCalendarContainer>
      <ReserveCalendarTitle>대여 현황</ReserveCalendarTitle>
      <CalendarHeaderContainer>
        <span>{"<"}</span>
        <span>2022.02.</span>
        <span>{">"}</span>
      </CalendarHeaderContainer>
      <div>
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </div>
      <div>
        <div>
          1week
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div>
          2week
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div>
          3week
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div>
          4week
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div>
          5week
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
    </ReserveCalendarContainer>
  );
};

export default ReserveCalendar;
