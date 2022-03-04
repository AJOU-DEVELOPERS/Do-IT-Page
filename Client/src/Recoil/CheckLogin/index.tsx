import { atom, selector } from "recoil";
import { API } from "@API/.";
import { getCheckLogin } from "@API/Account";

export const userInfoAtom = atom<boolean | any>({
  key: "userInfoAtom",
  default: false,
});

export const getCheckToken = selector({
  key: "getCheckToken",
  get: async () => {
    const res = await API({ api: getCheckLogin });
    return res;
  },
});

export const checkLoginNow = selector({
  key: "checkLoginNow",
  get: async ({ get }) => {
    const getUserInfo = await get(userInfoAtom);
    if (getUserInfo) return getUserInfo;
    const getTokenInfo = await get(getCheckToken);
    return getTokenInfo;
  },
  set: ({ set }, newValue) => {
    set(userInfoAtom, newValue);
  },
});
