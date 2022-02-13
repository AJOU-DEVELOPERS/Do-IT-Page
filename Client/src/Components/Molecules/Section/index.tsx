import { Container, Wrapper, SubSection, SearchButton } from "./styles";
import Input from "@Atoms/Input";

const AdminInputProps = {
  width: "200px",
  borderColor: "black",
  padding: "0.4vw",
};

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <Input {...AdminInputProps} />
        <SearchButton />
      </Wrapper>
      <SubSection></SubSection>
    </Container>
  );
};

export default Section;
