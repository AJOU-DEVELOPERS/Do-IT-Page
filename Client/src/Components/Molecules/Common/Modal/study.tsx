import Button from "@Atoms/Button";
import { ContentType, StudyContentType } from "@Type/.";
import { Title, Info, Container, Wrapper, ButtonContainer } from "./styles";
import { studyApply } from "./util";

// interface StudyModalProps extends ContentType {
//   fn: () => void;
//   createdAt: string;
//   studyIdx: number;
//   updatedAt: string;
// }

// 아니오 눌렀을때 fn 함수 실행하면 되는데 props type 때문에 안되는듯?
// 예 눌렀을때 studyIdx보내야하는데 type때문에 안되는듯
const StudyModalSubject = (props: ContentType) => {
  const { name, leaderName, leaderUserIdx, totalHeadcount } =
    props as StudyContentType;
  // const { name, leaderName, leaderUserIdx, totalHeadcount, fn, studyIdx } = props;
  const handleApplyClick = async (e: any) => {
    e.stopPropagation();
    await studyApply({ studyIdx: 1 });
  };
  return (
    <>
      <Container>
        <Title>스터디명 : {name}</Title>
        <Wrapper>
          <Info>{`이름 : ${leaderName}`}</Info>
          <Info>{`인원 : ${leaderUserIdx} / ${totalHeadcount}`}</Info>
        </Wrapper>
      </Container>
      <div>신청하시겠습니까?</div>
      <ButtonContainer>
        <Button title="예" onClick={handleApplyClick} />
        <Button title="아니오" />
        {/* <Button title="아니오" onClick={fn} /> */}
      </ButtonContainer>
    </>
  );
};

export default StudyModalSubject;
