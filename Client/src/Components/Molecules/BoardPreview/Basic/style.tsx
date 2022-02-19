import { AlignCenterBetween } from "@Style/.";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  ${AlignCenterBetween};
  padding: 12px 17px;
  box-sizing: border;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 0.8rem;
  span {
    margin-right: 27px;
  }
`;

const Date = styled(Text)`
  width: 50%;
  text-align: right;
`;

export { Container, Text, Date };
