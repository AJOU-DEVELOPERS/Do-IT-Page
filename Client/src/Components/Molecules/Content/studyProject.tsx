import StudyContainer from "@Organisms/Study";
import { GET_STUDY_CONTENT_URL } from "@Constant/API";
import { hasBoardContent } from "@Util/index";
import { useRecoilValue } from "recoil";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import BoardPreview from "@Molecules/BoardPreview";
import { Container } from "./styles";

interface Props {
  type?: "study" | "project";
}
const Content = ({ type }: Props) => {
  //타입에 따라서 데이터를 가져온다.
  const boardContents =
    hasBoardContent(GET_STUDY_CONTENT_URL, "스터디") &&
    useRecoilValue<ContentType[]>(BoardContentSelector(GET_STUDY_CONTENT_URL));

  const { collecting, processing, done } = boardContents?.slice(0, 7).reduce(
    (result: any, element: any) => {
      result[element.status].push(element);
      return result;
    },
    { collecting: [], processing: [], done: [] }
  );

  return (
    <Container>
      <StudyContainer title={"모집 중"}>
        {collecting.map((content: ContentType, index: number) => (
          <BoardPreview key={index} previewType={"card"} content={content} />
        ))}
      </StudyContainer>
      <StudyContainer title={"진행 중"}>
        {processing.map((content: ContentType, index: number) => (
          <BoardPreview key={index} previewType={"card"} content={content} />
        ))}
      </StudyContainer>
      <StudyContainer title={"마감"}>
        {done.map((content: ContentType, index: number) => (
          <BoardPreview key={index} previewType={"card"} content={content} />
        ))}
      </StudyContainer>
    </Container>
  );
};

export default Content;
