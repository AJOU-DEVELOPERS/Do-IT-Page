export interface ReservationRoomData {
  reservationStartDate: string;
  reservationStartHour: string;
  reservationEndDate: string;
  reservationEndHour: string;
  userName: string;
}
export interface postReservationRoomBodyProps extends ReservationRoomData {
  userIdx: number;
}
