import Calendar from "@Organisms/Calendar";
import { PreviewProps } from "@Type/.";
import { convertBoardType, convertProjectType, convertRankingType } from "@Util/.";
import BasicBoardPreview from "./Basic/.";
import CardPreviewImage from "./Card/.";
import ImageBoardPreview from "./Image/.";
import RankingBoardPreview from "./Ranking/.";

const BoardPreview = ({ content, previewType = "basic", type = "basic" }: PreviewProps) => {
  const getPreview = {
    card: <CardPreviewImage {...convertProjectType(content)} />,
    ranking: <RankingBoardPreview {...convertRankingType(content)} />,
    image: <ImageBoardPreview {...convertBoardType(content)} />,
    calendar: <Calendar />,
    basic: <BasicBoardPreview {...convertBoardType(content)} type={type} />,
  };

  return getPreview[previewType];
};

export default BoardPreview;
