import { AlignCenterAround, GreyColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20vh;
  ${AlignCenterAround}
  &::before {
    position: absolute;
    width: 100vw;
    content: "";
    display: block;
    margin: 0px 0px 200px 0px;
    border-top: 1px solid ${GreyColor};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 15px;
`;
