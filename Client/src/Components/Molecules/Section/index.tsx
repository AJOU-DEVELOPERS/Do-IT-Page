import { Container, Title, Wrapper, SubSection } from "./styles";
import { ADMIN_CATEGORY } from "@Constant/index";
import Input from "@Atoms/Input";

const AdminInputProps = {
  borderColor: "black",
  padding: "0.4vw",
};

const Section = ({ category }: { category: number }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{ADMIN_CATEGORY[category]}</Title>
        <Input {...AdminInputProps} />
      </Wrapper>
      <SubSection></SubSection>
    </Container>
  );
};

export default Section;
