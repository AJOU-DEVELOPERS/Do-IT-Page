import styled from "styled-components";
import { HEADER_NAV_LENGTH, TABLET_WIDTH } from "@Constant/.";
import { AlignCenterAround, DefaultColor, HoverPointer } from "@Style/.";

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 15px;
  font-weight: 900;
  font-size: 36px;
  margin-top: 1rem;
  color: ${DefaultColor};
  text-shadow: 0px 3px 3px #00000029;
  ${HoverPointer};
`;

const NavContainer = styled.div`
  display: flex;
  width: 55%;
  height: 50%;
  ${AlignCenterAround}

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    position: fixed;
    width: 100px;
    top: 100px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color: #ffffff;
  }
`;

const NavItem = styled.button`
  width: calc(100 / ${HEADER_NAV_LENGTH});
  align-items: center;
  font-size: 1.8vmin;
`;
export { LeftContainer, Title, NavContainer, NavItem };
