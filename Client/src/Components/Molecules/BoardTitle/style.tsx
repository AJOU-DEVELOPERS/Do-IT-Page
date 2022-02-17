import { DefaultColor, HoverPointer } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${DefaultColor};
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;
