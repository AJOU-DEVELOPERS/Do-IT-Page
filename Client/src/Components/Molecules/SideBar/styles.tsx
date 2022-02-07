import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;

  width: 10vw;
  min-height: 40vh;

  z-index: 999;

  transition-duration: 1s;
  transform: translateX(-100%);
`;
const CategoryButton = styled.button`
  background: none;
  cursor: pointer;
  :hover {
    opacity: 50%;
  }
`;

export { Container, CategoryButton };
