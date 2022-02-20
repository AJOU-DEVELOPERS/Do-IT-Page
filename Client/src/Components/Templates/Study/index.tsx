import Header from "@Organisms/Header";
import Modal from "@Molecules/Modal";
import StudyContainer from "@Organisms/Study";
import { Title, ModalContainer, Container } from "./styles";
import { useCallback, useEffect, useRef, useState } from "react";
import { GET_STUDY_CONTENT_URL } from "@Constant/index";
import { hasBoardContent } from "@Util/index";
import { useRecoilValue } from "recoil";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import BoardPreview from "@Molecules/BoardPreview";

interface Props {
  title: string;
  studyLeader: string;
  status: string;
  member: number;
}

const StudyTemp = () => {
  const [joinModalOnOff, setJoinModalOnOff] = useState<Props>();
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  const handlePosticClick = (value: Props) => setJoinModalOnOff(value);

  const outSection = useRef(null);

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
    <>
      {joinModalOnOff && (
        <Modal onClick={(e) => outSection.current !== e.target && setJoinModalOnOff(undefined)}>
          <ModalContainer ref={outSection}>
            <h2>{joinModalOnOff.title}</h2>
            <p>이름 : {joinModalOnOff.studyLeader}</p>
            <p>인원 : 1 / {joinModalOnOff.member}</p>
            <p>정말로 신청하시겠습니까??</p>
          </ModalContainer>
        </Modal>
      )}
      <Header onClick={handleUserIconClick} />
      <Title>스터디</Title>
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
    </>
  );
};
export default StudyTemp;
