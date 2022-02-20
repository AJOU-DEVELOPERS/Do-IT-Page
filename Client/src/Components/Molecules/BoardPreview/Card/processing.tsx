import ApplyButton from "@Atoms/Button/Apply";
import Icon from "@Atoms/Icon";
import { USER_ICON_URL, STUDY_STATUS } from "@Constant/.";
import { ProjectContentType } from "@Type/.";
import { LargeContainer, Head, Status, Info, Title, ProcessingInfoContainer } from "./style";

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
    <LargeContainer>
      <Head>
        <Status>{STUDY_STATUS[status]}</Status>
        <Info>{techStackStr}</Info>
      </Head>
      <Title borderBottom={"0.2px solid rgba(112, 112, 112, 1)"}>{name}</Title>
      <ProcessingInfoContainer>
        <Info>{`참여자 : ${leaderName}`}</Info>
        <p>김영진, 김영진, 김영진, 김영진</p>
        <Info>{`인원 : ${leaderUserIdx} / ${totalHeadcount}`}</Info>
        <p>
          ~하고 ~하고 ~할 것이다. ~하고 ~하고 ~할 것이다. ~하고 ~하고 ~할 것 이다.~하고 ~하고 ~할 것이다. ~하고 ~하고
          ~할 것이다. ~하고 ~하고 ~할 것이다.~하고 ~하고 ~할 것이다. ~하고 ~하고 ~할 것이다.
        </p>
      </ProcessingInfoContainer>
    </LargeContainer>
  );
};

export default CardBoardPreview;
