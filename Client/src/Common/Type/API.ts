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

export interface UserInfoData {
  userIdx: number;
  id: string;
  studentId: number;
  name: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
}
