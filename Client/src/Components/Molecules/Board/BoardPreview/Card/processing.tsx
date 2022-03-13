import { STUDY_STATUS } from "@Constant/.";
import { ProjectContentType } from "@Type/.";
import {
  Container,
  Head,
  Status,
  Info,
  ProcessingInfoContainer,
  ProcessingTitle,
} from "./style";

const CardBoardPreview = ({
  name,
  description,
  totalHeadcount,
  numParticipant,
  leaderName,
  status,
  projectTechStacks = [],
}: ProjectContentType) => {
  const techStackStr = projectTechStacks.map((item) => item.name).join("/");
  return (
    <Container>
      <Head status={status}>
        <Status>{STUDY_STATUS[status]}</Status>
        <Info>{techStackStr}</Info>
      </Head>
      <ProcessingTitle>{name}</ProcessingTitle>
      <ProcessingInfoContainer>
        <Info>{`리더 : ${leaderName}`}</Info>
        <Info>설명 : {description}</Info>
        <Info>{`인원 : ${numParticipant} / ${totalHeadcount}`}</Info>
      </ProcessingInfoContainer>
    </Container>
  );
};

export default CardBoardPreview;
