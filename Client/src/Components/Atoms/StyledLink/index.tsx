import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavItemHover } from "@Style/.";

interface LinkProps {
  to: string;
}

const StyledLink = styled(Link)<LinkProps>`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  opacity: 0.25;
`;

const StyledNav = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  ${NavItemHover}
  height:100%;
`;
export { StyledLink, StyledNav };
