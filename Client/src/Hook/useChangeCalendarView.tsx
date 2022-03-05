import { useEffect } from "react";

export const useChangeCalendarView = (
  calendarRef: React.MutableRefObject<any>,
  view: string
) => {
  const changeView = () => {
    calendarRef.current?.getInstance().changeView(view, true);
    calendarRef.current?.getInstance().prev();
    calendarRef.current?.getInstance().render();
  };

  useEffect(() => {
    changeView();
  }, [calendarRef.current]);
};
