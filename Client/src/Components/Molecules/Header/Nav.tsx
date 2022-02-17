import { HEADER_NAV_LIST, _BOARD_INFOS } from "@Constant/.";
import { NavContainer, NavItem } from "./style";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <NavContainer>
      {HEADER_NAV_LIST.map((boardName: string) => (
        <Link to={_BOARD_INFOS[boardName].pageSrc}>{boardName}</Link>
      ))}
    </NavContainer>
  );
};

export default HeaderNav;
