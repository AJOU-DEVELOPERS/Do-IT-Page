import BoardPreview from "@Molecules/BoardPreview";
import ContentTitle from "@Molecules/ContentTitle";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { BoardContentType, BoardType } from "@src/Common/Type";
import { useRecoilValue } from "recoil";
import { BoardContainer, ContenTitleContainer } from "./style";

const BoardContent = ({ boardType, apiSrc }: BoardType) => {
  const BoardContents = useRecoilValue<BoardContentType[]>(
    BoardContentSelector(apiSrc)
  );
  return (
    <BoardContainer>
      <ContenTitleContainer>
        <ContentTitle title={boardType} />
      </ContenTitleContainer>
      {BoardContents.slice(0, 4).map(({ title, date }) => (
        <BoardPreview type="line" title={title} date={date} />
      ))}
    </BoardContainer>
  );
};
export default BoardContent;
