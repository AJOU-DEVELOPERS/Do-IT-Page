import { STUDY_STATUS } from "@Constant/.";
import { ProjectContentType } from "@Type/.";
import {
  LargeContainer,
  Head,
  Status,
  Info,
  Title,
  ProcessingInfoContainer,
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
    <LargeContainer>
      <Head>
        <Status>{STUDY_STATUS[status]}</Status>
        <Info>{techStackStr}</Info>
      </Head>
      <Title borderBottom={"0.2px solid rgba(112, 112, 112, 1)"}>{name}</Title>
      <ProcessingInfoContainer>
        <Info>{`리더 : ${leaderName}`}</Info>
        <p>프로젝트 설명 : {description}</p>
        <Info>{`인원 : ${numParticipant} / ${totalHeadcount}`}</Info>
      </ProcessingInfoContainer>
    </LargeContainer>
  );
};

export default CardBoardPreview;
