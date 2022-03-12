import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

export const ReserveBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
  border-radius: 21px;
  padding: 40px;
`;

export const ButtonContainer = styled.div`
  margin: auto;
  width: 150px;
  height: 50px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-top: 32px;
  }
`;

export const ReserveBoxTextContainer = styled.div`
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 270px;
    text-align: center;
    margin: 35px 0 15px 0;
    span {
      font-weight: 500;
      font-size: 18px;
    }
  }
`;
