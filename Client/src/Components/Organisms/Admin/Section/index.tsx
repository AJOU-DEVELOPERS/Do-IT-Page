import {
  Container,
  Wrapper,
  SubSectionContainer,
  SearchButton,
} from "./styles";
import Input from "@Atoms/Input";
import SubSection from "@Molecules/Admin/SubSection";

const AdminInputProps = {
  width: "200px",
  borderColor: "black",
  padding: "0.4vw",
};

const Section = ({ category }: { category: number }) => {
  return (
    <Container>
      <Wrapper>
        <Input {...AdminInputProps} />
        <SearchButton />
      </Wrapper>
      <SubSectionContainer>
        <SubSection category={category} />
      </SubSectionContainer>
    </Container>
  );
};

export default Section;
