import { GetRecoilValue, selectorFamily } from "recoil";
import { _API } from "@API/.";
import { getBoardContents } from "@API/test";
import { BoardContentType, ContentType, ProjectContentType } from "@Type/.";

export const BoardContentSelector = selectorFamily<ContentType[], string>({
  key: "BoardContentSelector",
  get: (apiSrc: string) => async () => {
    const { message, ...data } = await _API({ api: getBoardContents, apiSrc });
    if (!message) {
      alert("서버에러");
      return [];
    }
    return data[Object.keys(data)[0]].filter(
      (item: any) => item?.status !== "deleted"
    );
  },
});

export const FilterViewBoardContentSelector = selectorFamily<
  ContentType[],
  string
>({
  key: "FilterViewBoardContentSelector",
  get:
    (apiSrc: string) =>
    async ({ get }) => {
      const list = get(BoardContentSelector(apiSrc));
      if (list.length === 0) return [];
      return list.reduce(
        (acc: any, cur: any) => {
          if (!acc?.[cur.status]) return acc;
          return {
            ...acc,
            [cur.status]: [...acc[cur.status], cur],
          };
        },
        { collecting: [], processing: [], waiting: [], done: [] }
      );
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
      return (list as Array<ContentType>).filter((item: ContentType) => {
        const key =
          (item as ProjectContentType).projectIdx ??
          (item as ProjectContentType).studyIdx ??
          (item as BoardContentType).idx;
        return key > num * size && key <= (num + 1) * size;
      }) as ContentType[];
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
