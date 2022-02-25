import { GET_SOLVED_CARD_URL } from "@Constant/img";
import { CardContainer, Info } from "./style";

const RankingCard = ({ name }: { name: string }) => {
  return (
    <CardContainer>
      <Info url={GET_SOLVED_CARD_URL(name)} alt="랭킹" />
    </CardContainer>
  );
};
export default RankingCard;
