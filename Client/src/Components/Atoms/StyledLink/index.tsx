import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
}

const StyledLink = styled(Link)<LinkProps>`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  opacity: 0.25;
`;

export default StyledLink;
