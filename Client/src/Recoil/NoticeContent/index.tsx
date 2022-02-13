import { atom, selector } from "recoil";
import { API } from "@API/.";
import { BoardContentType } from "@src/Common/Type";
import { getNoticeContents } from "@API/test";

export const noticeContentAtom = atom<BoardContentType[]>({
  key: "checkLogin",
  default: [],
});

export const noticeContentSelector = selector<BoardContentType[]>({
  key: "checkLoginSelector",
  get: async () => {
    const res = await API({ api: getNoticeContents });
    return res;
  },
});
