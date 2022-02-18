import { atom, selectorFamily } from "recoil";
import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import {
  BoardContentType,
  ProjectContentType,
  RankingContentType,
} from "@Type/.";

export const BoardContentSelector = selectorFamily<
  BoardContentType[] | RankingContentType[] | ProjectContentType[],
  string
>({
  key: "BoardContentSelector",
  get: (apiSrc: string) => async () => {
    const res = await _API({ api: getBoardContents, apiSrc });
    return res;
  },
});
