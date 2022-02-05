import { CAROUSEL_TIME, CAROUSEL_URL } from "@Constant/.";
import Carousel from "@Molecules/Carousel";
import FirstContainer from "./styles";

const FirstContent = () => {
  return (
    <Carousel timer={Number(CAROUSEL_TIME)}>
      {CAROUSEL_URL.map((data: string, idx: number) => (
        <FirstContainer key={idx} url={data} />
      ))}
    </Carousel>
  );
};

export default FirstContent;
