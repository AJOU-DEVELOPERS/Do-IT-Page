import StudyContainer from "@Organisms/Study";
import Modal from "@Molecules/Common/Modal";
import StudyModalSubject from "@Molecules/Common/Modal/study";
import ProjectModalSubject from "@Molecules/Common/Modal/project";
import { STUDY_STATUS } from "@Constant/index";
import { GET_STUDY_CONTENT_URL } from "@Constant/API";
import { hasBoardContent } from "@Util/index";
import { useRecoilValue } from "recoil";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import BoardPreview from "@Molecules/Board/BoardPreview";
import { Container, ModalContainer, Wrapper } from "./styles";
import { useEffect, useRef, useState } from "react";

interface Props {
  type?: "study" | "project";
}
const Content = ({ type }: Props) => {
  const [modalOnOff, setModalOnOff] = useState<ContentType>();
  const outSection = useRef(null);

  const handlePosticClick = (e: any) => {
    const target = e.target.closest("button");
    if (!target) return;
    const data = target.parentNode.parentNode
      .getAttribute("data-idx")
      .split(" ");
    const status = data[1],
      index = data[2];
    setModalOnOff(typeContents[status][index]);
  };

  // useEffect(() => {
  //   console.log(modalOnOff);
  // }, [modalOnOff]);
  //타입에 따라서 데이터를 가져온다.
  const boardContents =
    hasBoardContent(GET_STUDY_CONTENT_URL, "스터디") &&
    useRecoilValue<ContentType[]>(BoardContentSelector(GET_STUDY_CONTENT_URL));

  const typeContents = boardContents?.slice(0, 7).reduce(
    (result: any, element: any) => {
      result[element.status].push(element);
      return result;
    },
    { collecting: [], processing: [], done: [] }
  );

  return (
    <>
      {modalOnOff && (
        <Modal
          onClick={(e) =>
            outSection.current !== e.target && setModalOnOff(undefined)
          }
        >
          {modalOnOff && (
            <ModalContainer ref={outSection}>
              {type === "study" && <StudyModalSubject {...modalOnOff} />}
              {type !== "study" && <ProjectModalSubject {...modalOnOff} />}
            </ModalContainer>
          )}
        </Modal>
      )}
      <Container onClick={(e) => handlePosticClick(e)}>
        {Object.keys(STUDY_STATUS).map((element, i) => (
          <StudyContainer
            key={i}
            title={STUDY_STATUS[element as keyof typeof STUDY_STATUS]}
          >
            {typeContents[element].map(
              (content: ContentType, index: number) => (
                <Wrapper
                  key={index}
                  data-idx={type + " " + element + " " + index}
                >
                  <BoardPreview previewType={"card"} content={content} />
                </Wrapper>
              )
            )}
          </StudyContainer>
        ))}
      </Container>
    </>
  );
};

export default Content;
