import {
  POST_CREATE_PROJECT,
  GET_PROJECT_DATA,
  GET_PROJECT_CREATE_ACCEPT,
  GET_PROJECT_CREATE_DENY,
  GET_PROJECT_APPLY_ACCEPT,
  GET_PROJECT_APPLY_DENY,
  POST_PROJECT_APPLY,
} from "@Constant/API";
import axios from "axios";

// 특정 프로젝트 데이터 요청
export const getProjectData = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_DATA + `/${projectIdx}`);
  return data;
};

// 프로젝트 참가 신청
export const postProjectApply = async (projectIdx: number) => {
  const { data } = await axios.post(POST_PROJECT_APPLY + `/${projectIdx}`);
  return data;
};

// 프로젝트 참가 승인
export const getProjectAccept = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_APPLY_ACCEPT + `/${projectIdx}`);
  return data;
};

// 프로젝트 참가 거절
export const getProjectDeny = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_APPLY_DENY + `/${projectIdx}`);
  return data;
};

// 프로젝트 생성
export const postCreateProject = async (body: any) => {
  const { data } = await axios.post(POST_CREATE_PROJECT, body);
  return data;
};

// 프로젝트 생성 승인
export const getProjectCreateAccept = async (projectIdx: number) => {
  const { data } = await axios.get(
    GET_PROJECT_CREATE_ACCEPT + `/${projectIdx}`
  );
  return data;
};

// 프로젝트 생성 거절
export const getProjectCreateDeny = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_CREATE_DENY + `/${projectIdx}`);
  return data;
};
