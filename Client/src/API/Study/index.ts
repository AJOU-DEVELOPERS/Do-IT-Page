import {
  GET_STUDY_ACCEPT,
  GET_STUDY_DATA,
  GET_STUDY_DENY,
  POST_CREATE_STUDY,
} from "@Constant/API";
import axios from "axios";

export const postCreateStudy = async (body: any) => {
  const { data } = await axios.post(POST_CREATE_STUDY, body);
  return data;
};

export const getStudyData = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_DATA + `/${studyIdx}`);
  return data;
};

export const getStudyAccept = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_ACCEPT + `/${studyIdx}`);
  return data;
};

export const getStudyDeny = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_DENY + `/${studyIdx}`);
  return data;
};
