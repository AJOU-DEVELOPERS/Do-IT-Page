import { DAY_NAMES } from "@Constant/.";
import { reservationRoomSelector } from "@Recoil/Reservation";
import { postReservationRoomBodyProps } from "@Type/API";
import { reservationDatasProps } from "@Type/Reservation";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";

import { DateProps } from "../Header";
import ReserveModal from "../Modal";
import { WeekTitleContainer, CalendarContainer, WeekContainer } from "./styles";
import { checkReserve, getMonthDays, getReserveDatas } from "./util";

const CalendarBody = ({ month, year }: DateProps) => {
  const data = useRecoilValue<postReservationRoomBodyProps[]>(
    reservationRoomSelector({ year, month })
  );
  const [toggle, setToggle] = useState<boolean>(false);
  const [reserveDate, setReserveDate] = useState<reservationDatasProps[]>([]);

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

  return (
    <Suspense fallback={null}>
      <>
        <div onClick={handleDayClick}>
          <WeekTitleContainer>
            {DAY_NAMES.map((day: string) => (
              <span>{day}</span>
            ))}
          </WeekTitleContainer>
          <CalendarContainer>
            {new Array(5).fill(0).map((_, week) => (
              <WeekContainer>
                {MonthDays.slice(week * 7, week * 7 + 7).map(
                  ({ month, date }) => (
                    <span
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
            {reserveDate.map((item) => (
              <ReserveModal item={item} />
            ))}
          </div>
        )}
      </>
    </Suspense>
  );
};

export default CalendarBody;
