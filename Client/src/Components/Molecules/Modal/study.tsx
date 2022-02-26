import { ContentType, StudyContentType } from "@Type/.";
import { Title, Info, Container, Wrapper } from "./styles";
const StudyModalSubject = (props: ContentType) => {
  console.log(props);
  const { name, leaderName, leaderUserIdx, totalHeadcount } = props as StudyContentType;
  return (
    <>
      <Container>
        <Title>{name}</Title>
        <Wrapper>
          <Info>{`이름 : ${leaderName}`}</Info>
          <Info>{`인원 : ${leaderUserIdx} / ${totalHeadcount}`}</Info>
        </Wrapper>
      </Container>
      <div>신청하시겠습니까?</div>
    </>
  );
};

export default StudyModalSubject;
