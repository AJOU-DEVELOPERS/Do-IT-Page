import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@Recoil/CheckLogin";

import { SmallLoginButtonType } from "@Style/.";

import Button from "@Atoms/Button";
import { Container } from "./styles";
import HeaderLeftSide from "@Molecules/Common/Header";
import HeaderNav from "@Molecules/Common/Header/Nav";

const Header = ({ onClick }: { onClick?: () => void }) => {
  // const user = false;
  const user = useRecoilValue(checkLoginSelector);

  return (
    <Container>
      <HeaderLeftSide user={user} />
      {user ? (
        <HeaderNav />
      ) : (
        <Button {...SmallLoginButtonType} title="로그인" onClick={onClick} />
      )}
    </Container>
  );
};

export default Header;
