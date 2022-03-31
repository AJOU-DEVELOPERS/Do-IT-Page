import { DAY_NAMES } from "@Constant/.";
import { reservationDatasProps } from "@Type/Reservation";
import { Suspense, useEffect, useState } from "react";
import { CalendarBodyProps } from "../Header";
import ReserveModal from "../Modal";
import { WeekTitleContainer, CalendarContainer, WeekContainer } from "./styles";
import { checkReserve, getMonthDays, getReserveDatas } from "./util";

const CalendarBody = ({ month, year, data }: CalendarBodyProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [reserveDate, setReserveDate] = useState<reservationDatasProps[]>([]);
  const [order, setOrder] = useState<number>(0);

  const handleDayClick = ({ target }: { target: any }) => {
    const day = target.getAttribute("data-day");
    if (!day) return;
    if (!checkReserve(day, reserveDatas)) return;

    const temp = reserveDatas.filter((item) => item.date === day);
    setReserveDate(temp);
    setToggle(true);
  };

  const MonthDays: any[] = getMonthDays({ month, year });

  const reserveDatas = getReserveDatas(data);

  useEffect(() => {
    if (order > reserveDatas.length - 1) setOrder(0);
  }, [reserveDatas]);
  return (
    <Suspense fallback={null}>
      <>
        <div onClick={handleDayClick}>
          <WeekTitleContainer>
            {DAY_NAMES.map((day: string) => (
              <span key={day}>{day}</span>
            ))}
          </WeekTitleContainer>
          <CalendarContainer>
            {new Array(5).fill(0).map((_, week) => (
              <WeekContainer key={week}>
                {MonthDays.slice(week * 7, week * 7 + 7).map(
                  ({ month, date }) => (
                    <span
                      key={date}
                      data-day={`${year}-${month}-${date}`}
                      className={
                        checkReserve(`${year}-${month}-${date}`, reserveDatas)
                          ? "isTrue"
                          : ""
                      }
                    >
                      {date}
                    </span>
                  )
                )}
              </WeekContainer>
            ))}
          </CalendarContainer>
        </div>
        {toggle && (
          <div>
            <ReserveModal
              items={reserveDate}
              setToggle={setToggle}
              order={order}
              setOrder={setOrder}
            />
          </div>
        )}
      </>
    </Suspense>
  );
};

export default CalendarBody;
