import { DateAction, DateProps } from "@Type/.";

export const dateReducer = ({ year, month }: DateProps, action: DateAction) => {
  switch (action.type) {
    case "increment":
      return (month + 1) % 13 === 0
        ? { month: 1, year: year + 1 }
        : { month: month + 1, year };
    case "decrement":
      return month - 1 === 0
        ? { month: 12, year: year - 1 }
        : { month: month - 1, year };
  }
};
