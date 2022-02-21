import { MOBILE_WIDTH, TABLET_WIDTH } from "@Constant/.";
import {
  BoardContentType,
  DateProps,
  ProjectContentType,
  RankingContentType,
} from "@Type/.";
import { History } from "history";

export const sayHello = (): string => "hi";

export const getYearMonth = (): DateProps => {
  const date = new Date();
  return { year: date.getFullYear(), month: date.getMonth() + 1 };
};

export const getMonthDays = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): any[] => {
  const { beforeLastDate, firstDay, lastDate, lastDay } =
    getFirstAndLastDayInfo({
      year,
      month,
    });

  const MonthDays = new Array(35).fill(0).map((_, idx) => {
    if (idx < firstDay)
      return { month: month - 1, date: beforeLastDate - (firstDay - idx - 1) };
    if (idx > lastDate + 1)
      return { month: month + 1, date: idx - lastDate - 1 };
    return { month, date: idx - firstDay + 1 };
  });

  return MonthDays;
};

export const getFirstAndLastDayInfo = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  const beforeLastDate = new Date(year, month - 1, 0).getDate();
  const [firstDate, firstDay] = [
    new Date(year, month - 1, 1).getDate(),
    new Date(year, month - 1, 1).getDay(),
  ];
  const [lastDate, lastDay] = [
    new Date(year, month, 0).getDate(),
    new Date(year, month, 0).getDay(),
  ];
  return { beforeLastDate, firstDate, firstDay, lastDate, lastDay };
};

export const hasBoardContent = (
  apiSrc: string,
  boardName: string
): true | null => (apiSrc !== "" && boardName !== "이미지" ? true : null);

export const convertRankingType = (content: any): RankingContentType => content;

export const convertBoardType = (content: any): BoardContentType => content;

export const convertProjectType = (content: any): ProjectContentType => content;

export const handleHeaderClick = (history: History) => {
  history.push("/main");
};

export const checkTablet = () => window.innerWidth < TABLET_WIDTH;
export const checkMobile = () => window.innerWidth < MOBILE_WIDTH;
