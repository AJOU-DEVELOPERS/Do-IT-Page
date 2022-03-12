import { Dispatch } from "react";
import { getProjectAllSelector, getStudyAllSelector } from "@Recoil/Admin";
import { BasicType } from "./type";
import { CREATE_PROJECT_ARR } from "./Create";
import { API } from "@API/.";
import {
  getStudyAccept,
  getStudyData,
  getStudyDeny,
  postCreateStudy,
} from "@API/Study";
import {
  getProjectAccept,
  getProjectData,
  getProjectDeny,
  postCreateProject,
} from "@API/Project";

export const checkStudy = ({ type }: BasicType) => type === "스터디";

export const getWorkListType = ({ type }: BasicType) =>
  checkStudy({ type }) ? getStudyAllSelector : getProjectAllSelector;

export const getDataIdx = ({ target }: { target: any }) =>
  target.getAttribute("data-idx");

export const getIdx = ({ target }: { target: any }) =>
  getDataIdx(target.closest("#userContainer"));

export const WorkCreate = async ({
  inputRef,
  stack,
  type,
}: {
  inputRef: React.RefObject<HTMLInputElement[]>;
  stack: string[];
  type: string | undefined;
}) => {
  const api = checkStudy({ type }) ? postCreateStudy : postCreateProject;
  const bodyOption = checkStudy({ type }) ? {} : { techStacks: stack };
  const data = {
    ...CREATE_PROJECT_ARR.reduce((acc, cur) => {
      const tempValue = (inputRef.current as HTMLInputElement[])[cur.key].value;
      const value =
        cur.value === "totalHeadcount" ? Number(tempValue) : tempValue;
      return {
        ...acc,
        [cur.value]: value,
      };
    }, bodyOption),
    leaderUserIdx: 1,
    leaderName: "김영진",
  };
  console.log(data);
  const res = await API({ api, data });
  console.log(res);
  res === "true" ? alert("성공") : alert("실패");
  return;
};

export const WorkSearch = ({
  value,
  workList,
  setWorkList,
}: {
  value: string;
  workList: any;
  setWorkList: Dispatch<any>;
}) => {
  // setStudyList(
  //   studyList.filter(
  //     (item: { status: string }) => item.status === STUDY_STATE[value]
  //   )
  // );
};

export const AcceptClick = async ({
  target,
  type,
}: {
  target: any;
  type: string | undefined;
}) => {
  const data = getIdx({ target });
  const api = checkStudy({ type }) ? getStudyAccept : getProjectAccept;
  const res = await API({ api, data });
  res === "true" ? alert("성공") : alert("실패");

  console.log(res);
  return;
};

export const DenyClick = async ({
  target,
  type,
}: {
  target: any;
  type: string | undefined;
}) => {
  const data = getIdx({ target });
  const api = checkStudy({ type }) ? getStudyDeny : getProjectDeny;
  const res = await API({ api, data });
  res === "true" ? alert("성공") : alert("실패");

  console.log(res);
  return;
};

export const workClick = async ({
  currentTarget,
  type,
}: {
  currentTarget: any;
  type: string | undefined;
}) => {
  const data = getDataIdx(currentTarget);
  const api = checkStudy({ type }) ? getStudyData : getProjectData;
  const res = await API({ api, data });
  console.log(res);
  return res;
};
