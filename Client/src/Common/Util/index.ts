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

export const getDateFromUTC = (date: string): string => date.substring(0, 10);
