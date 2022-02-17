import Logo from "@Atoms/Logo";
import { GET_SOLVED_CARD_URL, RANKING_IMG_URL } from "@Constant/.";
import { CardContainer, Info, Name } from "./style";

const RankingCard = ({ name }: { name: string }) => {
  return (
    <CardContainer>
      <Info url={GET_SOLVED_CARD_URL(name)} alt="랭킹" />
    </CardContainer>
  );
};
export default RankingCard;
