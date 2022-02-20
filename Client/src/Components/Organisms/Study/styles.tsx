import styled from "styled-components";

const Container = styled.div`
  padding: 2vh 2vw;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(24vw, 1fr));
  grid-gap: 2vh 4vw;
  div {
    background-color: white;
  }
  justify-items: center;
`;

const Title = styled.p`
  color: #707070;
  padding: 1vh 0px;
  margin: 1vh 0px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
`;

export { Container, Title };
