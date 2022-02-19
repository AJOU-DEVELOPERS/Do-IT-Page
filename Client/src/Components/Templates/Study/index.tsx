import Header from "@Organisms/Header";
import Postic from "@Molecules/Postic";
import Modal from "@Molecules/Modal";
import { Title, PosticWrapper, Container } from "./styles";
import { useCallback, useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    console.log(joinModalOnOff);
  }, [joinModalOnOff]);
  const handlePosticClick = (value: Props) => setJoinModalOnOff(value);
  const outSection = useRef(null);

  return (
    <>
      {joinModalOnOff && (
        <Modal onClick={(e) => outSection.current !== e.target && setJoinModalOnOff(undefined)}>
          <Container ref={outSection}>
            <h2>{joinModalOnOff.title}</h2>
            <p>이름 : {joinModalOnOff.studyLeader}</p>
            <p>인원 : 1 / {joinModalOnOff.member}</p>
            <p>정말로 신청하시겠습니까??</p>
          </Container>
        </Modal>
      )}
      <Header onClick={handleUserIconClick} />
      <Title>스터디 모집</Title>
      <PosticWrapper>
        {Array(10)
          .fill("")
          .map((element) => (
            <Postic handlePosticClick={handlePosticClick} />
          ))}
      </PosticWrapper>
    </>
  );
};
export default StudyTemp;
