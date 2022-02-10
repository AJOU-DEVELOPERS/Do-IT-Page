import Logo from "@Atoms/Logo";
import { GET_SOLVED_CARD_URL, RANKING_IMG_URL } from "@Constant/.";
import { RankingCardProps } from "@Type/.";
import { CardContainer, Info, Name } from "./style";

const RankingCard = ({ name, rating, tier, ranking }: RankingCardProps) => {
  return (
    <CardContainer>
      <Logo url={RANKING_IMG_URL[ranking]} alt={`${ranking + 1} 등`} />
      <Name>{name}</Name>
      <Info url={GET_SOLVED_CARD_URL(name)} alt="랭킹" />
    </CardContainer>
  );
};
export default RankingCard;
