import { _API } from "@API/.";
import { checkAdmin, getUsersInfo } from "@API/Admin";
import { getBoardContents } from "@API/test";
import { GET_PROJECT_CONTENT_URL, GET_STUDY_CONTENT_URL } from "@Constant/API";
import { UserInfoData } from "@Type/API";
import { GetRecoilValue, selector, selectorFamily } from "recoil";

export const getCheckAdminSelector = selector<boolean>({
  key: "getCheckAdminSelector",
  get: async () => {
    const res = await checkAdmin();
    console.log(res);
    return res;
  },
});

export const getUsersInfoSelector = selector<UserInfoData[]>({
  key: "getUsersInfoSelector",
  get: async () => {
    const res = await getUsersInfo();
    return res;
  },
});

export const getUserInfoSelector = selectorFamily<UserInfoData[], number>({
  key: "getUsersInfoSelector",
  get:
    (idx) =>
    async ({ get }: { get: GetRecoilValue }): Promise<UserInfoData[]> => {
      const userInfoList = get(getUsersInfoSelector);
      return userInfoList.filter((userInfo: UserInfoData) => userInfo.userIdx === idx);
    },
});

export const getStudyAllSelector = selector<any>({
  key: "getStudyAllSelector",
  get: async () => {
    const { message, studies } = await _API({
      api: getBoardContents,
      apiSrc: GET_STUDY_CONTENT_URL,
    });
    if (!message) {
      alert("디비에러");
      return [];
    }
    return studies;
  },
});

export const getProjectAllSelector = selector<any>({
  key: "getProjectAllSelector",
  get: async () => {
    const { message, projects } = await _API({
      api: getBoardContents,
      apiSrc: GET_PROJECT_CONTENT_URL,
    });
    if (!message) {
      alert("디비에러");
      return [];
    }
    return projects;
  },
});
