import { DefaultColor } from "@Style/.";
import styled from "styled-components";

const DetailTitle = styled.div`
  font: bold;
  font-size: 24px;
  color: ${DefaultColor};
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
`;

const DetailInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 50px 0;
  div {
    color: ${DefaultColor};
  }
`;

const DetailDate = styled.div`
  margin-right: 100px;
`;

const DetailText = styled.div`
  overflow: auto;
  height: 75%;
  @media only screen and (max-width: 550px) {
    height: 50%;
  }
`;

export { DetailTitle, DetailInfoContainer, DetailDate, DetailText };
