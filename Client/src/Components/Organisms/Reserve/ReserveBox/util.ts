import { postReservationRoomBodyProps, ReservationRoomData } from "@Type/API";

export const makeReservationRoomType = ({
  reservationStartDate,
  reservationStartHour,
  reservationEndDate,
  reservationEndHour,
  reservationName,
}: ReservationRoomData): postReservationRoomBodyProps => {
  return {
    reservationStartDate,
    reservationStartHour,
    reservationEndDate,
    reservationEndHour,
    reservationName,
    userIdx: 0,
  };
};
