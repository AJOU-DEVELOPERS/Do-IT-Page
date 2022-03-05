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
}: {
  type: string | undefined;
  techStacks: string[];
  inputRef: React.RefObject<HTMLInputElement[]>;
  leaderUserIdx: number;
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
    leaderName: "김영진",
  };
};
export const WorkCreate = async ({
  inputRef,
  stack,
  type,
  userId,
}: {
  inputRef: React.RefObject<HTMLInputElement[]>;
  stack: string[];
  type: string | undefined;
  userId: number;
}) => {
  const api = checkStudy({ type }) ? postCreateStudy : postCreateProject;
  const data = makeRequestBody({
    type,
    techStacks: stack,
    leaderUserIdx: userId,
    inputRef,
  });
  const res = await API({ api, data });
  console.log(res);
  res === "true" ? alert("성공") : alert("실패");
  return;
};
