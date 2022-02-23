export interface ReservationRoomData {
  reservationStartDate: string;
  reservationStartHour: string;
  reservationEndDate: string;
  reservationEndHour: string;
  reservationName: string;
}
export interface postReservationRoomBodyProps extends ReservationRoomData {
  userIdx: number;
}
