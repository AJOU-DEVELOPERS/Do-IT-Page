import Header from "@Organisms/Header";
import Modal from "@Molecules/Modal";
import Content from "@Molecules/Content/studyProject";
import { Title, ModalContainer, Container } from "./styles";
import { useCallback, useRef, useState } from "react";

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
      <Content type="study" />
    </>
  );
};
export default StudyTemp;
