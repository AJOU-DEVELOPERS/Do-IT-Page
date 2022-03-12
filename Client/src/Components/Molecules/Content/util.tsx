import { API } from "@API/.";
import { postCreateProject } from "@API/Project";
import { postCreateStudy } from "@API/Study";
import { GET_PROJECT_CONTENT_URL, GET_STUDY_CONTENT_URL } from "@Constant/API";

import { CREATE_PROJECT_ARR, CREATE_STUDY_ARR } from "./CreateWork/CreateModal";
import { BasicType } from "./type";

export const checkStudy = ({ type }: BasicType) =>
  type === "study" || type === "스터디";

export const getContentType = ({ type }: BasicType) =>
  checkStudy({ type }) ? "스터디" : "프로젝트";

export const getContentAPI = ({ type }: BasicType) =>
  checkStudy({ type }) ? GET_STUDY_CONTENT_URL : GET_PROJECT_CONTENT_URL;

export const makeRequestBody = ({
  type,
  techStacks,
  inputRef,
  leaderUserIdx,
  leaderName,
}: {
  type: string | undefined;
  techStacks: string[];
  inputRef: React.RefObject<HTMLInputElement[]>;
  leaderUserIdx: number;
  leaderName: string;
}) => {
  const bodyOption = checkStudy({ type }) ? {} : { techStacks };
  const WORK_ARR = checkStudy({ type }) ? CREATE_STUDY_ARR : CREATE_PROJECT_ARR;

  return {
    ...WORK_ARR.reduce((acc, cur) => {
      const tempValue = (inputRef.current as HTMLInputElement[])[cur.key].value;
      const value =
        cur.value === "totalHeadcount" ? Number(tempValue) : tempValue;
      return {
        ...acc,
        [cur.value]: value,
      };
    }, bodyOption),
    leaderUserIdx,
    leaderName,
  };
};
export const WorkCreate = async ({
  inputRef,
  stack,
  type,
  userId,
  userName,
}: {
  inputRef: React.RefObject<HTMLInputElement[]>;
  stack: string[];
  type: string | undefined;
  userId: number;
  userName: string;
}) => {
  const api = checkStudy({ type }) ? postCreateStudy : postCreateProject;
  const data = makeRequestBody({
    type,
    techStacks: stack,
    leaderUserIdx: userId,
    inputRef,
    leaderName: userName,
  });
  const { message } = await API({ api, data });
  message ? alert("신청 되었습니다.") : alert("실패");
};
