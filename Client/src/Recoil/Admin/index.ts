import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import { GET_PROJECT_CONTENT_URL, GET_STUDY_CONTENT_URL } from "@Constant/API";
import { selector } from "recoil";

export const getStudyAllSelector = selector<any>({
  key: "getStudyAllSelector",
  get: async () => {
    const res = await _API({
      api: getBoardContents,
      apiSrc: GET_STUDY_CONTENT_URL,
    });
    return res;
  },
});

export const getProjectAllSelector = selector<any>({
  key: "getProjectAllSelector",
  get: async () => {
    const res = await _API({
      api: getBoardContents,
      apiSrc: GET_PROJECT_CONTENT_URL,
    });
    return res;
  },
});
