import RankingCard from "@Molecules/RankingCard";
import { RankingContentType } from "@Type/.";

const RankingBoardPreview = ({ name }: RankingContentType) => {
  return <RankingCard name={name}></RankingCard>;
};

export default RankingBoardPreview;
