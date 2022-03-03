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

export interface UserInfoData {
  userIdx: number;
  id: string;
  studentId: number;
  name: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
}
