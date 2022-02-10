import { atom, selectorFamily } from "recoil";
import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import { BoardContentType, BoardType, RankingContentType } from "@Type/.";

export const BoardContentSelector = selectorFamily<
  BoardContentType[] & RankingContentType[],
  string
>({
  key: "BoardContentSelector",
  get: (apiSrc: string) => async () => {
    const res = await _API({ api: getBoardContents, apiSrc });
    return res;
  },
});
