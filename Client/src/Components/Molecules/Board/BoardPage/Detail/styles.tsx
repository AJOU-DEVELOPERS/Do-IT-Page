import { TABLET_WIDTH } from "@Constant/.";
import { DefaultColor } from "@Style/.";
import styled from "styled-components";

const DetailTitle = styled.div`
  font: bold;
  font-size: 24px;
  color: ${DefaultColor};
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 1em;
  }
`;

const DetailInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 50px 0;
  div {
    color: ${DefaultColor};
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 10px 0 30px 0;
    font-size: 0.8em;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DetailDate = styled.div`
  margin-right: 100px;
`;

const DetailText = styled.div`
  overflow: auto;
  height: 75%;
  @media only screen and (max-width: 550px) {
    font-size: smaller;
    height: 60%;
  }
`;

export { DetailTitle, DetailInfoContainer, DetailDate, DetailText };
