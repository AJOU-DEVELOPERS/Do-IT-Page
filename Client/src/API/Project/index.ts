import {
  POST_CREATE_PROJECT,
  GET_PROJECT_DATA,
  GET_PROJECT_ACCEPT,
  GET_PROJECT_DENY,
} from "@Constant/API";
import axios from "axios";

export const postCreateProject = async (body: any) => {
  const { data } = await axios.post(POST_CREATE_PROJECT, body);
  return data;
};

export const getProjectData = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_DATA + `/${projectIdx}`);
  return data;
};

export const getProjectAccept = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_ACCEPT + `/${projectIdx}`);
  return data;
};

export const getProjectDeny = async (projectIdx: number) => {
  const { data } = await axios.get(GET_PROJECT_DENY + `/${projectIdx}`);
  return data;
};
