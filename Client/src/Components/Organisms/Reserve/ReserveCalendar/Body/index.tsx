import { DateProps } from "../Header";
import { WeekTitleContainer, CalendarContainer, WeekContainer } from "./styles";

const CalendarBody = ({ month, year }: DateProps) => {
  const handleDayClick = ({ target }: { target: any }) => {
    const day = target.getAttribute("data-day");
    if (!day) return;
    alert(day);
  };
  return (
    <div onClick={handleDayClick}>
      <WeekTitleContainer>
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </WeekTitleContainer>
      <CalendarContainer>
        <WeekContainer>
          <span data-day={`${year}-${month}-1`}>1</span>
          <span data-day={`${year}-${month}-2`}>2</span>
          <span data-day={`${year}-${month}-3`}>3</span>
          <span data-day={`${year}-${month}-4`}>4</span>
          <span data-day={`${year}-${month}-5`}>5</span>
          <span data-day={`${year}-${month}-6`}>6</span>
          <span data-day={`${year}-${month}-7`}>7</span>
        </WeekContainer>
        <WeekContainer>
          <span data-day={`${year}-${month}-8`}>8</span>
          <span data-day={`${year}-${month}-9`}>9</span>
          <span data-day={`${year}-${month}-10`}>10</span>
          <span data-day={`${year}-${month}-11`}>11</span>
          <span data-day={`${year}-${month}-12`}>12</span>
          <span data-day={`${year}-${month}-13`}>13</span>
          <span data-day={`${year}-${month}-14`}>14</span>
        </WeekContainer>
        <WeekContainer>
          <span data-day={`${year}-${month}-15`}>15</span>
          <span data-day={`${year}-${month}-16`}>16</span>
          <span data-day={`${year}-${month}-17`}>17</span>
          <span data-day={`${year}-${month}-18`}>18</span>
          <span data-day={`${year}-${month}-19`}>19</span>
          <span data-day={`${year}-${month}-20`}>20</span>
          <span data-day={`${year}-${month}-21`}>21</span>
        </WeekContainer>
        <WeekContainer>
          <span data-day={`${year}-${month}-22`}>22</span>
          <span data-day={`${year}-${month}-23`}>23</span>
          <span data-day={`${year}-${month}-24`}>24</span>
          <span data-day={`${year}-${month}-25`}>25</span>
          <span data-day={`${year}-${month}-26`}>26</span>
          <span data-day={`${year}-${month}-27`}>27</span>
          <span data-day={`${year}-${month}-28`}>28</span>
        </WeekContainer>
        <WeekContainer>
          <span data-day={`${year}-${month}-29`}>29</span>
          <span data-day={`${year}-${month}-30`}>30</span>
          <span data-day={`${year}-${month}-31`}>31</span>
          <span data-day={`${year}-${month}-1`}>1</span>
          <span data-day={`${year}-${month}-2`}>2</span>
          <span data-day={`${year}-${month}-3`}>3</span>
          <span data-day={`${year}-${month}-4`}>4</span>
        </WeekContainer>
      </CalendarContainer>
    </div>
  );
};

export default CalendarBody;
