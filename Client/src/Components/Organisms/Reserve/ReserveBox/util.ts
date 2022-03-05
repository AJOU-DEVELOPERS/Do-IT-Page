import { postReservationRoomBodyProps, ReservationRoomData } from "@Type/API";

export const makeReservationRoomType = ({
  reservationStartDate,
  reservationStartHour,
  reservationEndDate,
  reservationEndHour,
  userIdx,
}: ReservationRoomData): postReservationRoomBodyProps => {
  return {
    reservationStartDate,
    reservationStartHour,
    reservationEndDate,
    reservationEndHour,
    userIdx,
  };
};
