import Calendar from "@Organisms/Calendar/.";
import { PreviewProps } from "@Type/.";
import {
  convertBoardType,
  convertProjectType,
  convertRankingType,
} from "@Util/.";
import BasicBoardPreview from "./Basic/.";
import CardPreviewImage from "./Card/.";
import ImageBoardPreview from "./Image/.";
import RankingBoardPreview from "./Ranking/.";

const BoardPreview = ({ content, previewType = "basic" }: PreviewProps) => {
  const getPreview = (previewType: string): JSX.Element => {
    if (previewType === "card")
      return <CardPreviewImage {...convertProjectType(content)} />;
    if (previewType === "ranking") {
      return <RankingBoardPreview {...convertRankingType(content)} />;
    }
    if (previewType === "image")
      return <ImageBoardPreview {...convertBoardType(content)} />;
    if (previewType === "calendar") {
      return <Calendar isReadOnly={true} />;
    }
    return <BasicBoardPreview {...convertBoardType(content)} />;
  };

  return getPreview(previewType);
};

export default BoardPreview;
