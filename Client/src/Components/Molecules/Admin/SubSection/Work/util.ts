import { Dispatch } from "react";
import { getProjectAllSelector, getStudyAllSelector } from "@Recoil/Admin";
import { API } from "@API/.";
import { getStudyAccept, getStudyData, getStudyDeny } from "@API/Study";
import { getProjectAccept, getProjectData, getProjectDeny } from "@API/Project";
import { BasicType } from "@Molecules/Content/type";
import { checkStudy } from "@Molecules/Content/util";

export const getWorkListType = ({ type }: BasicType) =>
  checkStudy({ type }) ? getStudyAllSelector : getProjectAllSelector;

export const getDataIdx = ({ target }: { target: any }) =>
  target?.getAttribute("data-idx");

export const getIdx = ({ target }: { target: any }) =>
  getDataIdx(target.closest("#userContainer"));

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
  const data = getDataIdx({ target: currentTarget });

  const api = checkStudy({ type }) ? getStudyData : getProjectData;
  const res = await API({ api, data });
  return res;
};
