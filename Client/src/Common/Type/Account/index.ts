import { SetterOrUpdater } from "recoil";

export interface userInfo {
  userIdx: number;
  userName: string;
}
export interface LoginInfoType {
  id: string;
  password: string;
}

export interface DepartmentType {
  departmentIdx: number;
  name: string;
  sort: string;
}

export interface RegisterInfoType extends LoginInfoType {
  name: string;
  studentId: number;
  phoneNumber: string;
  email: string;
  department: DepartmentType[];
}

export interface LoginClickType {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
  pwRef: React.MutableRefObject<HTMLInputElement | null>;
  history: any;
  setUser: SetterOrUpdater<any>;
}

export interface RegisterHandlerType {
  inputRef: React.MutableRefObject<HTMLInputElement[]>;
  subjectRef: React.MutableRefObject<HTMLSelectElement | null>;
  checkId: boolean;
  mailCheck: boolean;
}
