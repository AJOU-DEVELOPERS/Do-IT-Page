import styled from "styled-components";

interface Props {
  type: string;
}

export const Container = styled.div<Props>`
  ${({ type }) => (type === "card" ? CardContainer : LineContainer)}
`;
const CardContainer = `
  background-color: white;
  width: 15%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
