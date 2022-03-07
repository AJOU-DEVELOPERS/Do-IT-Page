import Button from "@Atoms/Button";
import { ContentType, StudyContentType } from "@Type/.";
import { Title, Info, Container, Wrapper, ButtonContainer } from "./styles";
import { studyApply } from "./util";

type Props = {
  fn: () => void;
  userIdx: number;
};

// 아니오 눌렀을때 fn 함수 실행하면 되는데 props type 때문에 안되는듯?
// 예 눌렀을때 studyIdx보내야하는데 type때문에 안되는듯
const StudyModalSubject = (props: ContentType & Props) => {
  const { fn, userIdx } = props;
  const { name, leaderName, numParticipant, totalHeadcount, idx } =
    props as StudyContentType;
  const handleApplyClick = async (e: any) => {
    e.stopPropagation();
    await studyApply({ studyIdx: idx, userIdx });
  };
  return (
    <>
      <Container>
        <Title>스터디명 : {name}</Title>
        <Wrapper>
          <Info>{`리더 : ${leaderName}`}</Info>
          <Info>{`인원 : ${numParticipant} / ${totalHeadcount}`}</Info>
        </Wrapper>
      </Container>
      <div>신청하시겠습니까?</div>
      <ButtonContainer>
        <Button title="예" onClick={handleApplyClick} />
        <Button title="아니오" onClick={fn} />
      </ButtonContainer>
    </>
  );
};

export default StudyModalSubject;
