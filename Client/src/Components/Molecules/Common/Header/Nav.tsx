import { StyledNav } from "@Atoms/StyledLink";
import { HEADER_NAV_LIST, _BOARD_INFOS } from "@Constant/.";
import { checkTablet } from "@Util/.";
import { useState } from "react";
import { NavContainer, NavItem } from "./style";

const HeaderNav = () => {
  const tablet = checkTablet();
  const [open, setOpen] = useState(!tablet);
  const handleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      {tablet && (
        <img
          alt="menu"
          src="/hamburger.svg"
          width="30px"
          onClick={handleOpenMenu}
        />
      )}
      {open && (
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
      )}
    </>
  );
};

export default HeaderNav;
