import { GetRecoilValue, selectorFamily } from "recoil";
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

export const GetBoardContentLengthSelector = selectorFamily<number, string>({
  key: "GetBoardContentLengthSelector",
  get:
    (apiSrc: string) =>
    async ({ get }: { get: GetRecoilValue }) => {
      const list = get(BoardContentSelector(apiSrc));
      return Math.ceil(list.length / 10);
    },
});
export const BoardContentPagenationSelector = selectorFamily<
  BoardContentType[] | RankingContentType[] | ProjectContentType[],
  [number, string]
>({
  key: "BoardContentPagenationSelector",
  get:
    ([num, apiSrc]) =>
    async ({ get }: { get: GetRecoilValue }) => {
      const list = get(BoardContentSelector(apiSrc));
      return list;
      // return list.filter(
      //   (item: BoardContentType | RankingContentType | ProjectContentType) =>
      //     item.idx > num * 10 && item.idx <= (num + 1) * 10
      // );
    },
});
