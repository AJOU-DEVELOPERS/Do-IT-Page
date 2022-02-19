import { GetRecoilValue, selectorFamily } from "recoil";
import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import { BoardContentType, ContentType } from "@Type/.";

export const BoardContentSelector = selectorFamily<ContentType[], string>({
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
  ContentType[],
  [number, string]
>({
  key: "BoardContentPagenationSelector",
  get:
    ([num, apiSrc]) =>
    async ({ get }: { get: GetRecoilValue }) => {
      const list = get(BoardContentSelector(apiSrc));
      return (list as Array<ContentType>).filter(
        (item: ContentType) => item.idx > num * 10 && item.idx <= (num + 1) * 10
      ) as ContentType[];
    },
});

export const BoardContentOneBoardSelector = selectorFamily<
  BoardContentType[],
  [number, string]
>({
  key: "BoardContentOneBoardSelector",
  get:
    ([id, boardApiSrc]) =>
    async ({ get }: { get: GetRecoilValue }): Promise<BoardContentType[]> => {
      const list = get(BoardContentSelector(boardApiSrc));
      return (list as Array<BoardContentType>).filter(
        (item: BoardContentType) => item.idx === id
      );
      // const item = get(BoardContentSelector(boardApiSrc + `?id=${id}`));
      // return item
    },
});
