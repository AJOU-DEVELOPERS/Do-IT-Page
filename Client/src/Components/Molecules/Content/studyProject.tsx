import { useCallback, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import StudyContainer from "@Organisms/Study";
import Modal from "@Molecules/Common/Modal";
import StudyModalSubject from "@Molecules/Common/Modal/study";
import ProjectModalSubject from "@Molecules/Common/Modal/project";
import { STUDY_STATUS } from "@Constant/index";
import { GET_STUDY_CONTENT_URL } from "@Constant/API";
import { hasBoardContent } from "@Util/index";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import BoardPreview from "@Molecules/Board/BoardPreview";
import { Container, ModalContainer, Wrapper } from "./styles";
import { getContentAPI, getContentType } from "./util";
import useCloseModal from "@src/Hook/useCloseModal";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { userInfo } from "@Type/Account";

interface Props {
  type?: "study" | "project";
}
const Content = ({ type }: Props) => {
  const [modalOnOff, setModalOnOff] = useState<ContentType>();
  const outSection = useRef<HTMLDivElement>(null);
  const { userIdx, userName } = useRecoilValue(userInfoAtom) as userInfo;

  const handlePosticClick = (e: any) => {
    const target = e.target.closest("button");
    if (!target) return;
    const data = target.parentNode.parentNode.getAttribute("data-idx").split(" ");
    const status = data[1],
      index = data[2];

    setModalOnOff(typeContents[status][index]);
  };

  const boardContents =
    hasBoardContent(GET_STUDY_CONTENT_URL, getContentType({ type })) &&
    useRecoilValue<ContentType[]>(BoardContentSelector(getContentAPI({ type })));

  const typeContents = boardContents?.slice(0, 7).reduce(
    (acc: any, cur: any) => {
      return {
        ...acc,
        [cur.status]: [...acc[cur.status], cur],
      };
    },
    { collecting: [], processing: [], done: [], waiting: [], deleted: [] }
  );

  const fn = useCallback(() => {
    if (modalOnOff) setModalOnOff(undefined);
  }, [modalOnOff]);

  useCloseModal({ ref: outSection, fn });

  return (
    <>
      {modalOnOff && (
        <Modal>
          {modalOnOff && (
            <ModalContainer ref={outSection}>
              {type === "study" && <StudyModalSubject {...modalOnOff} fn={fn} userIdx={userIdx} />}
              {type !== "study" && <ProjectModalSubject {...modalOnOff} fn={fn} userIdx={userIdx} />}
            </ModalContainer>
          )}
        </Modal>
      )}
      <Container onClick={handlePosticClick}>
        {Object.keys(STUDY_STATUS).map((element, i) => (
          <StudyContainer key={i} title={STUDY_STATUS[element as keyof typeof STUDY_STATUS]}>
            {typeContents[element].map((content: ContentType, index: number) => (
              <Wrapper key={index} data-idx={type + " " + element + " " + index}>
                <BoardPreview previewType={"card"} content={content} />
              </Wrapper>
            ))}
          </StudyContainer>
        ))}
      </Container>
    </>
  );
};

export default Content;
