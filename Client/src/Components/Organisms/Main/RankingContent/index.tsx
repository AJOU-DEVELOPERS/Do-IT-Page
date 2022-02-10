import { useRecoilValue } from "recoil";
import ContentTitle from "@Molecules/ContentTitle";
import { ContentContainer, ContenTitleContainer } from "./style";
import { GET_RANKING_URL } from "@Constant/.";
import { BoardContentSelector } from "@Recoil/BoardContent";
import { RankingContentType } from "@Type/.";
import RankingCard from "@Molecules/RankingCard";

const RainkingContent = () => {
  const rankingContents = useRecoilValue<RankingContentType[]>(
    BoardContentSelector(GET_RANKING_URL)
  );

  return (
    <>
      <ContenTitleContainer>
        <ContentTitle title="백준 랭킹" />
      </ContenTitleContainer>
      <ContentContainer>
        {rankingContents.slice(0, 3).map(({ name, rating, tier }, ranking) => (
          <RankingCard
            name={name}
            rating={rating}
            tier={tier}
            ranking={ranking}
          />
        ))}
      </ContentContainer>
    </>
  );
};
export default RainkingContent;
