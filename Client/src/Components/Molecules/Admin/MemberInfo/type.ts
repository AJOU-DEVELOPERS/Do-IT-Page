export interface Props {
  name: string;
  userId: string;
  studentId: number;
  createdAt: string;
}

export interface DetailProps extends Props {
  phoneNumber: string;
  email: string;
}
