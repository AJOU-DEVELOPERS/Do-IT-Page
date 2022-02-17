import { HEADER_NAV_LIST } from "@Constant/.";
import { NavContainer, NavItem } from "./style";

const HeaderNav = () => {
  return (
    <NavContainer>
      {HEADER_NAV_LIST.map((boardName: string) => (
        <NavItem>{boardName}</NavItem>
      ))}
    </NavContainer>
  );
};

export default HeaderNav;
