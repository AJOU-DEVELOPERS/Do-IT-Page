import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import {
  GET_PROJECT_CONTENT_URL,
  GET_STUDY_CONTENT_URL,
  GET_USERS_INFO_URL,
} from "@Constant/API";
import { UserInfoData } from "@Type/API";
import { GetRecoilValue, selector, selectorFamily } from "recoil";

export const getUsersInfoSelector = selector<UserInfoData[]>({
  key: "getUsersInfoSelector",
  get: async () => {
    const res = await _API({
      api: getBoardContents,
      apiSrc: GET_USERS_INFO_URL,
    });
    return res;
  },
});

export const getUserInfoSelector = selectorFamily<UserInfoData[], number>({
  key: "getUsersInfoSelector",
  get:
    (idx) =>
    async ({ get }: { get: GetRecoilValue }): Promise<UserInfoData[]> => {
      const userInfoList = get(getUsersInfoSelector);
      return userInfoList.filter(
        (userInfo: UserInfoData) => userInfo.userIdx === idx
      );
    },
});

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
