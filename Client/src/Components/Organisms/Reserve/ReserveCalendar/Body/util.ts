import { ReserveCalendarContainer } from "@Organisms/Reserve/Body/styles";
import { postReservationRoomBodyProps } from "@Type/API";
import { reservationDatasProps } from "@Type/Reservation";

export const getMonthDays = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): any[] => {
  const { beforeLastDate, firstDay, lastDate, lastDay } =
    getFirstAndLastDayInfo({
      year,
      month,
    });

  const MonthDays = new Array(35).fill(0).map((_, idx) => {
    if (idx < firstDay)
      return { month: month - 1, date: beforeLastDate - (firstDay - idx - 1) };
    if (idx > lastDate + 1)
      return { month: month + 1, date: idx - lastDate - 1 };
    return { month, date: idx - firstDay + 1 };
  });

  return MonthDays;
};

export const getFirstAndLastDayInfo = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const beforeLastDate = new Date(year, month - 1, 0).getDate();
  const [firstDate, firstDay] = [
    new Date(year, month - 1, 1).getDate(),
    new Date(year, month - 1, 1).getDay(),
  ];
  const [lastDate, lastDay] = [
    new Date(year, month, 0).getDate(),
    new Date(year, month, 0).getDay(),
  ];
  return { beforeLastDate, firstDate, firstDay, lastDate, lastDay };
};

export const checkReserve = (
  date: any,
  reserveDate: reservationDatasProps[]
): boolean => {
  console.log(reserveDate);
  console.log(date);
  return (
    reserveDate
      ?.map((item: reservationDatasProps) => item.date)
      .indexOf(date) >= 0
  );
};

export const getReserveDatas = (
  data: postReservationRoomBodyProps[]
): reservationDatasProps[] => {
  return data?.reduce((acc, cur): any => {
    const {
      reservationStartDate,
      reservationStartHour,
      reservationEndDate,
      reservationEndHour,
      userName,
    } = cur;

    const startDate = reservationStartDate.split("-");
    const endDate = reservationEndDate.split("-");
    const diff = Number(endDate[2]) - Number(startDate[2]) + 1;

    return [
      ...acc,
      ...new Array(diff).fill(0).map((_, idx) => {
        return {
          date: [
            startDate[0],
            Number(startDate[1]),
            Number(startDate[2]) + idx,
          ].join("-"),
          hour: `${reservationStartHour} - ${reservationEndHour}`,
          host: userName,
        };
      }),
    ];
  }, []);
};
