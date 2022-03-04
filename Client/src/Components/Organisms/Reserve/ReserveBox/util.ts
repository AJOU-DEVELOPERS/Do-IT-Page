import { postReservationRoomBodyProps, ReservationRoomData } from "@Type/API";

export const makeReservationRoomType = ({
  reservationStartDate,
  reservationStartHour,
  reservationEndDate,
  reservationEndHour,
  userName,
}: ReservationRoomData): postReservationRoomBodyProps => {
  return {
    reservationStartDate,
    reservationStartHour,
    reservationEndDate,
    reservationEndHour,
    userName,
    userIdx: 4,
  };
};
