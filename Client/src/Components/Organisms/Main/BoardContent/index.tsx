import BoardPreview from "@Molecules/BoardPreview";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { BoardContentType, BoardType } from "@src/Common/Type";
import { useRecoilValue } from "recoil";
import { BoardContainer, ContenTitleContainer } from "./style";

const BoardContent = ({ boardName }: { boardName: string }) => {
  const _boardName = boardName.replaceAll(" ", "");
  return <BoardContainer boardName={_boardName}></BoardContainer>;
};
export default BoardContent;
