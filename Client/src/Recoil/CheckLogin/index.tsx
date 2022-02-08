import { atom, selector } from "recoil";
import { API } from "@API/.";
import { getLoginInfo } from "@API/test";

export const checkLoginAtom = atom<Boolean | any>({
  key: "checkLogin",
  default: false,
});

export const checkLoginSelector = selector<Boolean | any>({
  key: "checkLoginSelector",
  get: async () => {
    const res = await API({ api: getLoginInfo });
    return res;
  },
  set: ({ set, get }, checkLogin) => {
    set(checkLoginAtom, checkLogin);
  },
});
