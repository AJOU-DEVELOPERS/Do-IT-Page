import { DateProps } from "@Type/.";

export const sayHello = (): string => "hi";

export const getYearMonth = (): DateProps => {
  const date = new Date();
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
};
