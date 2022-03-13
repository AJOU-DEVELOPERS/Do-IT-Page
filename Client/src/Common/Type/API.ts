export interface ReservationRoomData {
  reservationStartDate: string;
  reservationStartHour: string;
  reservationEndDate: string;
  reservationEndHour: string;
  userName?: string;
  userIdx: number;
}
export interface postReservationRoomBodyProps extends ReservationRoomData {
  status?: string;
}
