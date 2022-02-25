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

export const GetBoardContentLengthSelector = selectorFamily<
  number,
  [string, number | undefined]
>({
  key: "GetBoardContentLengthSelector",
  get:
    ([apiSrc, viewSize]) =>
    async ({ get }: { get: GetRecoilValue }) => {
      const list = get(BoardContentSelector(apiSrc));
      const size = viewSize ? viewSize : 10;
      return Math.ceil(list.length / Number(size));
    },
});

export const BoardContentPagenationSelector = selectorFamily<
  ContentType[],
  [number, string, number | undefined]
>({
  key: "BoardContentPagenationSelector",
  get:
    ([num, apiSrc, viewSize]) =>
    async ({ get }: { get: GetRecoilValue }) => {
      const list = get(BoardContentSelector(apiSrc));
      const size = viewSize ? viewSize : 10;
      return (list as Array<ContentType>).filter(
        (item: ContentType) =>
          item.idx > num * size && item.idx <= (num + 1) * size
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
        (item: BoardContentType) => item.idx === Number(id)
      );
      // const item = get(BoardContentSelector(boardApiSrc + `?id=${id}`));
      // return item
    },
});
