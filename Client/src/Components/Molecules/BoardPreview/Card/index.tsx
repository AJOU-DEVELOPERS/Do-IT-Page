import ProcessingBoard from "./processing";
import CollectingBoard from "./collecting";
import { ProjectContentType } from "@Type/.";

const CardBoardPreview = (props: ProjectContentType) => {
  const { status } = props;
  return (
    <>
      {status === "processing" && <ProcessingBoard {...props} />}
      {status !== "processing" && <CollectingBoard {...props} />}
    </>
  );
};

export default CardBoardPreview;
