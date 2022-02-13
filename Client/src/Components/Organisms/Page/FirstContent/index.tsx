import { CAROUSEL_TIME, CAROUSEL_URL } from "@Constant/.";
import Carousel from "@Molecules/Carousel";
import { Container, FirstContainer, MainTitle } from "./styles";

const FirstContent = () => {
  return (
    <Container>
      <Carousel timer={Number(CAROUSEL_TIME)}>
        {CAROUSEL_URL.map((data: string, idx: number) => (
          <FirstContainer key={idx} url={data} />
        ))}
      </Carousel>
      <MainTitle>
        <span>작은&nbsp;아이디어를&nbsp;통해 꿈을&nbsp;실현하는</span>
        <span>아주대학교&nbsp;IT 중앙동아리,&nbsp;Do-IT</span>
      </MainTitle>
    </Container>
  );
};

export default FirstContent;
