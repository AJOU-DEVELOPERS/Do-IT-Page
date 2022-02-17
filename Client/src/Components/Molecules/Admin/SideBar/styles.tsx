import styled from "styled-components";

const Container = styled.div`
  grid-area: sideBar;
  display: flex;
  flex-direction: column;
  padding: 3rem 0px;
  row-gap: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
`;
const CategoryButton = styled.button`
  background: none;
  font-size: 2vmin;
  cursor: pointer;
  :hover {
    opacity: 50%;
  }
`;

export { Container, CategoryButton };
