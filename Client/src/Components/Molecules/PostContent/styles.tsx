import { HoverPointer } from "@Style/.";
import styled from "styled-components";

const Container = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 1rem;
  border-bottom: 1px solid;
`;

const Content = styled.td`
  width: 25%;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid;
  padding: 0px 0.8rem;
  border-radius: 0.5rem;
  ${HoverPointer};
  :hover {
    opacity: 50%;
  }
`;

export { Container, Button, Content };
