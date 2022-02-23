export interface LoginInfoType {
  id: string;
  pw: string;
}

export interface RegisterInfoType extends LoginInfoType {
  name: string;
  studentId: string;
  subject: string;
  email: string;
}

export interface LoginClickType {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
  pwRef: React.MutableRefObject<HTMLInputElement | null>;
  history: any;
}

export interface RegisterHandlerType {
  idRef: React.MutableRefObject<HTMLInputElement | null>;
  pwRef: React.MutableRefObject<HTMLInputElement | null>;
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
  studentIdRef: React.MutableRefObject<HTMLInputElement | null>;
  subjectRef: React.MutableRefObject<HTMLInputElement | null>;
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  checkId: boolean;
  mailCheck: boolean;
}
