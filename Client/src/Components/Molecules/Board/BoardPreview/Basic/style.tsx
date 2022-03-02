import { TABLET_WIDTH } from "@Constant/index";
import { AlignCenterBetween, HoverPointer, MainItemHover } from "@Style/.";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  ${AlignCenterBetween};
  padding: 12px 17px;
  box-sizing: border;
  ${HoverPointer};
  ${MainItemHover}
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 6px 9px;
    height: 45px;
  }
`;

const Text = styled.p`
  font-size: 0.8rem;
  span {
    margin-right: 27px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

const Date = styled(Text)`
  width: 50%;
  text-align: right;
`;

export { Container, Text, Date };
