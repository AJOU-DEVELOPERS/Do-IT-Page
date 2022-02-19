import styled from "styled-components";
import { HEADER_NAV_LENGTH } from "@Constant/.";
import { AlignCenterAround, HoverPointer } from "@Style/.";

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 15px;
  font-weight: 900;
  font-size: 36px;
  margin-top: 1rem;
  color: #707070;
  text-shadow: 0px 3px 3px #00000029;
  ${HoverPointer};
`;

const NavContainer = styled.div`
  display: flex;
  width: 55%;
  ${AlignCenterAround}
`;

const NavItem = styled.button`
  width: calc(100 / ${HEADER_NAV_LENGTH});
  align-items: center;
  font-size: 1.8vmin;
`;
export { LeftContainer, Title, NavContainer, NavItem };
