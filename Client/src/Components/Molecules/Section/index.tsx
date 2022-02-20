// import { Container, Wrapper, SubSectionContainer, SearchButton, TableContainer, Content } from "./styles";
import Input from "@Atoms/Input";
import PostContent from "@Molecules/PostContent";

const AdminInputProps = {
  width: "200px",
  borderColor: "black",
  padding: "0.4vw",
};

const Section = () => {
  return (
    <></>
    // <Container>
    //   <Wrapper>
    //     <Input {...AdminInputProps} />
    //     <SearchButton />
    //   </Wrapper>
    //   <SubSectionContainer>
    //     <TableContainer>
    //       <Content>번호</Content>
    //       <Content>작성일자</Content>
    //       <Content>이름</Content>
    //       <Content>승인여부</Content>
    //     </TableContainer>
    //     <PostContent {...{ number: 1, createAt: new Date(1644591857821), name: "차재명" }} />
    //     <PostContent {...{ number: 2, createAt: new Date(), name: "이호용" }} />
    //   </SubSectionContainer>
    // </Container>
  );
};

export default Section;
