import styled from "styled-components";

interface Props {
  type: string;
}

export const Container = styled.div<Props>`
  ${({ type }) => (type === "box" ? BoxContainer : LineContainer)}
`;
const BoxContainer = styled.div`
  background-color: white;
  width: 20%;
  display: flex;
`;
const LineContainer = styled.div``;
export const Title = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #bac0c1;
`;
