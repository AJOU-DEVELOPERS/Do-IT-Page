import Calendar from "@Organisms/Calendar";
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
import { PreviewContainer } from "./style";

const BoardPreview = ({
  content,
  previewType = "basic",
  type = "basic",
}: PreviewProps) => {
  const getPreview = (previewType: string): JSX.Element => {
    if (previewType === "card") {
      return <CardPreviewImage {...convertProjectType(content)} />;
    }
    if (previewType === "ranking") {
      return <RankingBoardPreview {...convertRankingType(content)} />;
    }
    if (previewType === "image")
      return <ImageBoardPreview {...convertBoardType(content)} />;
    if (previewType === "calendar") {
      return <Calendar />;
    }
    return (
      <PreviewContainer>
        <BasicBoardPreview {...convertBoardType(content)} type={type} />
      </PreviewContainer>
    );
  };

  return getPreview(previewType);
};

export default BoardPreview;
