import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const PageFooterContainer = styled.div`
  color: #ffffff;
  width: 350px;
`;

const PageFooterText = styled.div`
  width: 100%;
  text-align: right;
  color: #afaaaa;
  text-shadow: -3px 3px 3px #00000029;
  font-size: 1.25em;
  line-height: 1.2;
`;

const PageFooterTitle = styled.div`
  /* width: 100%; */
  display: inline-height;
  text-align: right;
  font-size: 80px;
  font-weight: 900;
  font-family: Roboto;
  color: #ffffff;
  margin: 10px 0px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    color: black;
  }
`;

export { PageFooterContainer, PageFooterText, PageFooterTitle };
