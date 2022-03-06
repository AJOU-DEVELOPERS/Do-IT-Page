import { atom, selector } from "recoil";
import { API } from "@API/.";
import { getCheckLogin } from "@API/Account";
import { userInfo } from "@Type/Account";

export const userInfoAtom = atom<userInfo | boolean>({
  key: "userInfoAtom",
  default: false,
});

export const getCheckToken = selector({
  key: "getCheckToken",
  get: async () => {
    const res = await API({ api: getCheckLogin });
    return res?.message ? res.userInfo : false;
  },
});

export const checkLoginNow = selector({
  key: "checkLoginNow",
  get: async ({ get }) => {
    const getUserInfo = get(userInfoAtom);
    if (getUserInfo) return getUserInfo;
    const getTokenInfo = await get(getCheckToken);
    return getTokenInfo;
  },
  set: ({ set }, newValue) => {
    set(userInfoAtom, newValue as userInfo);
  },
});
