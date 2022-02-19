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

const BoardPreview = ({
  onClick,
  content,
  previewType = "basic",
}: PreviewProps) => {
  const getPreview = (previewType: string): JSX.Element => {
    if (previewType === "card")
      return (
        <CardPreviewImage onClick={onClick} {...convertProjectType(content)} />
      );
    if (previewType === "ranking") {
      return <RankingBoardPreview {...convertRankingType(content)} />;
    }
    if (previewType === "image")
      return (
        <ImageBoardPreview onClick={onClick} {...convertBoardType(content)} />
      );
    if (previewType === "calendar") {
      return <Calendar isReadOnly={true} />;
    }
    return (
      <BasicBoardPreview onClick={onClick} {...convertBoardType(content)} />
    );
  };

  return getPreview(previewType);
};

export default BoardPreview;
