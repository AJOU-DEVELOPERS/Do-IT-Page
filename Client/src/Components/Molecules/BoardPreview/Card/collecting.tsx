import ApplyButton from "@Atoms/Button/Apply";
import Icon from "@Atoms/Icon";
import { USER_ICON_URL, STUDY_STATUS } from "@Constant/.";
import { ApplyButtonType } from "@Style/.";
import { ProjectContentType } from "@Type/.";
import { Container, Head, Status, Info, Title, CollectingInfoContainer } from "./style";

const CardBoardPreview = ({
  name,
  decription,
  totalHeadcount,
  leaderUserIdx,
  leaderName,
  status,
  techStack = [],
}: ProjectContentType) => {
  const techStackStr = techStack.join("/");
  return (
    <Container>
      <Head>
        <Status>{STUDY_STATUS[status]}</Status>
        <Info>{techStackStr}</Info>
      </Head>
      <Title>{name}</Title>
      <CollectingInfoContainer>
        <Info>{`이름 : ${leaderName}`}</Info>
        <Info>{`인원 : ${leaderUserIdx} / ${totalHeadcount}`}</Info>
        <Icon url={USER_ICON_URL} alt="user icon" />
      </CollectingInfoContainer>
      <ApplyButton {...ApplyButtonType()} />
    </Container>
  );
};

export default CardBoardPreview;
