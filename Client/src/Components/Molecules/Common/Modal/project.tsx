import Button from "@Atoms/Button";
import { ContentType, ProjectContentType } from "@Type/.";
import { Title, Info, Container, Wrapper, ButtonContainer } from "./styles";
import { projectApply } from "./util";

type Props = {
  fn: () => void;
  userIdx: number;
};

const ProjectModalSubject = (props: ContentType & Props) => {
  const { fn, userIdx } = props;
  const { name, leaderName, leaderUserIdx, totalHeadcount, idx } = props as ProjectContentType;
  const handleApplyClick = async (e: any) => {
    e.stopPropagation();
    await projectApply({ projectIdx: idx, userIdx });
  };
  return (
    <>
      <Container>
        <Title>프로젝트명 : {name}</Title>
        <Wrapper>
          <Info>{`이름 : ${leaderName}`}</Info>
          <Info>{`인원 : ${leaderUserIdx} / ${totalHeadcount}`}</Info>
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

export default ProjectModalSubject;
