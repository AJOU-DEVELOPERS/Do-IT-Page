import Logo from "@Atoms/Logo";
import { RANKING_IMG_URL } from "@Constant/.";
import { RankingCardProps } from "@Type/.";
import { CardContainer, Info, Name } from "./style";

const RankingCard = ({ name, rating, tier, ranking }: RankingCardProps) => {
  return (
    <CardContainer>
      <Logo url={RANKING_IMG_URL[ranking]} alt={`${ranking + 1} 등`} />
      <Name>{name}</Name>
      <Info>
        {tier} {rating}점
      </Info>
    </CardContainer>
  );
};
export default RankingCard;
