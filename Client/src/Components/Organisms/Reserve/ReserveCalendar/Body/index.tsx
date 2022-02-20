import { DAY_NAMES } from "@Constant/.";
import { getMonthDays } from "@Util/.";
import { DateProps } from "../Header";
import { WeekTitleContainer, CalendarContainer, WeekContainer } from "./styles";

const CalendarBody = ({ month, year }: DateProps) => {
  const handleDayClick = ({ target }: { target: any }) => {
    const day = target.getAttribute("data-day");
    if (!day) return;
    alert(day);
  };

  const MonthDays: any[] = getMonthDays({ month, year });
  return (
    <div onClick={handleDayClick}>
      <WeekTitleContainer>
        {DAY_NAMES.map((day: string) => (
          <span>{day}</span>
        ))}
      </WeekTitleContainer>
      <CalendarContainer>
        {new Array(5).fill(0).map((_, week) => (
          <WeekContainer>
            {MonthDays.slice(week * 7, week * 7 + 7).map(({ month, date }) => (
              <span data-day={`${year}-${month}-${date}`}>{date}</span>
            ))}
          </WeekContainer>
        ))}
      </CalendarContainer>
    </div>
  );
};

export default CalendarBody;
