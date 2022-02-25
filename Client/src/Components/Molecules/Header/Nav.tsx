import { StyledNav } from "@Atoms/StyledLink";
import { HEADER_NAV_LIST, _BOARD_INFOS } from "@Constant/.";
import { NavContainer, NavItem } from "./style";

const HeaderNav = () => {
  return (
    <NavContainer>
      {HEADER_NAV_LIST.map((boardName: string) => (
        <StyledNav
          to={_BOARD_INFOS[boardName].pageSrc}
          key={`${boardName} navigation`}
        >
          {boardName}
        </StyledNav>
      ))}
    </NavContainer>
  );
};

export default HeaderNav;
