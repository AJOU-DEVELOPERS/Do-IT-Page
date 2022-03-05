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
  totalWorkList,
  setWorkList,
}: {
  value: string;
  totalWorkList: any;
  setWorkList: Dispatch<any>;
}) => {
  console.log(value);
  // setWorkList(
  //   totalWorkList.filter(
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
  const { message } = await API({ api, data });
  message ? alert("성공") : alert("실패");
  return message;
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
  const { message } = await API({ api, data });
  message ? alert("성공") : alert("실패");
  return message;
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
  const { message, res } = await API({ api, data });
  if (!message) {
    alert("실패");
    return [];
  }
  return res;
};
