export interface UserInfoData {
  userIdx: number;
  id: string;
  studentId: number;
  name: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  isPay: number;
  clubUserIdx: number;
  status?: string;
}

export interface UserInfoProps {
  idx: number;
  clubIdx: number;
}
