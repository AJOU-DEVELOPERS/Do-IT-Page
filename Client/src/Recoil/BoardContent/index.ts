import { atom, selectorFamily } from "recoil";
import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import { BoardContentType, BoardType } from "@src/Common/Type";

export const BoardContentSelector = selectorFamily<BoardContentType[], string>({
  key: "BoardContentSelector",
  get: (apiSrc: string) => async () => {
    const res = await _API({ api: getBoardContents, apiSrc });
    return res;
  },
});
