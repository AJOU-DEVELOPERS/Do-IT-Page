import styled from "styled-components";

const Container = styled.div`
  grid-area: section;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 2vh 4vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SubSectionContainer = styled.div`
  margin: 2vh;
  height: 80%;
  border: 1px solid;
`;

const SearchButton = styled.div`
  width: 45px;
  border: 1px solid;
  border-left: none;
  content: url("/coolicon.svg");
  cursor: pointer;
  :hover {
    opacity: 50%;
  }
`;

const TableContainer = styled.tr`
  display: flex;
  width: 100%;
  background-color: whitesmoke;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid;
`;

const Content = styled.td`
  width: 25%;
  text-align: center;
`;

export { Container, Wrapper, SubSectionContainer, SearchButton, TableContainer, Content };
