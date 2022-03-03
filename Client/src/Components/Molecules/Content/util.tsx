import { GET_PROJECT_CONTENT_URL, GET_STUDY_CONTENT_URL } from "@Constant/API";
import { BasicType } from "@Molecules/Admin/SubSection/Work/type";

export const checkStudy = ({ type }: BasicType) => type === "study";

export const getContentType = ({ type }: BasicType) =>
  checkStudy({ type }) ? "스터디" : "프로젝트";

export const getContentAPI = ({ type }: BasicType) =>
  checkStudy({ type }) ? GET_STUDY_CONTENT_URL : GET_PROJECT_CONTENT_URL;
