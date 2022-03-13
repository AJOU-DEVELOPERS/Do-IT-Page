import styled from "styled-components";
import { HEADER_NAV_LENGTH, TABLET_WIDTH } from "@Constant/.";
import { AlignCenterAround, DefaultColor, HoverPointer } from "@Style/.";

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  /* @media only screen and (max-width: ${TABLET_WIDTH}px) {
    color: #000000;
  } */
`;

const Title = styled.div`
  margin-left: 15px;
  font-weight: 900;
  font-size: 36px;
  margin-top: 1rem;
  color: ${DefaultColor};
  text-shadow: 0px 3px 3px #00000029;
  ${HoverPointer};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    color: rgb(112 112 112);
    margin-top: 0;
    font-size: 24px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  width: 55%;
  height: 50%;
  ${AlignCenterAround}

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    position: fixed;
    width: 120px;
    height: 340px;
    top: 70px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color: #28282f;
    animation-duration: 0.5s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        height: 0;
      }
      to {
        height: 340px;
      }
    }
  }
`;

const NavItem = styled.button`
  width: calc(100 / ${HEADER_NAV_LENGTH});
  align-items: center;
  font-size: 1.8vmin;
`;
export { LeftContainer, Title, NavContainer, NavItem };
