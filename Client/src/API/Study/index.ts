import {
  GET_STUDY_APPLY_ACCEPT,
  GET_STUDY_APPLY_DENY,
  GET_STUDY_CREATE_ACCEPT,
  GET_STUDY_CREATE_DENY,
  GET_STUDY_DATA,
  POST_CREATE_STUDY,
  POST_STUDY_APPLY,
} from "@Constant/API";
import axios from "axios";

// 특정 스터디 데이터 요청
export const getStudyData = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_DATA + `/${studyIdx}`);
  return data;
};

// 스터디 참가 신청
export const postStudyApply = async ({
  studyIdx,
  userIdx,
}: {
  studyIdx: number | undefined;
  userIdx: number;
}) => {
  const { data } = await axios.post(POST_STUDY_APPLY + `/${studyIdx}`, {
    userIdx,
  });
  return data;
};

// 스터디 참가 승인
export const getStudyAccept = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_APPLY_ACCEPT + `/${studyIdx}`);
  return data;
};

// 스터디 참가 거절
export const getStudyDeny = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_APPLY_DENY + `/${studyIdx}`);
  return data;
};

// 스터디 생성 신청
export const postCreateStudy = async (body: any) => {
  const { data } = await axios.post(POST_CREATE_STUDY, body);
  return data;
};

// 스터디 생성 승인
export const getStudyCreateAccept = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_CREATE_ACCEPT + `/${studyIdx}`);
  return data;
};

// 스터디 생성 거절
export const getStudyCreateDeny = async (studyIdx: number) => {
  const { data } = await axios.get(GET_STUDY_CREATE_DENY + `/${studyIdx}`);
  return data;
};
