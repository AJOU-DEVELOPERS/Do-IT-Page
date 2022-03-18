import { MOBILE_WIDTH, TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const DetailContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 13px #00000029;
  border-radius: 23px;
  width: 70%;
  margin: auto;
  padding: 30px 50px;
  height: 65vh;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 80%;
    padding: 20px 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export { DetailContainer, ButtonContainer };
