import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding-top: 200px;
  width: 65%;
  margin: auto;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding-top: 100px;
  }
`;

export default ContentContainer;
