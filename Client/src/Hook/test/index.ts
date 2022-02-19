import { DateAction, DateProps } from "@Type/.";
import React, { useEffect, useState } from "react";

const useTestHook = (init: any): any[] => {
  const [test, setTest] = useState(init);

  const handleTest = (e: any): void => setTest(e.target.value);

  const handleTestInit = () => setTest(init);

  return [test, handleTest, handleTestInit];
};

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

export const useChangeCalendarView = (
  calendarRef: React.MutableRefObject<any>,
  view: string
) => {
  const changeView = () => {
    calendarRef.current?.getInstance().changeView(view, true);
    calendarRef.current?.getInstance().prev();
  };

  useEffect(() => {
    console.log("?");
    changeView();
  }, [calendarRef.current]);
};
