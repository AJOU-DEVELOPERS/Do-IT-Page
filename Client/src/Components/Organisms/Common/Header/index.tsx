import { useRecoilValue } from "recoil";
import { userInfoAtom } from "@Recoil/CheckLogin";

import { SmallLoginButtonType } from "@Style/.";

import Button from "@Atoms/Button";
import { Container } from "./styles";
import HeaderLeftSide from "@Molecules/Common/Header";
import HeaderNav from "@Molecules/Common/Header/Nav";
import { userInfo } from "@Type/Account";
import { checkMobile } from "@Util/.";

const Header = ({ onClick }: { onClick?: () => void }) => {
  const user = useRecoilValue<boolean | userInfo>(userInfoAtom);

  return (
    <Container>
      <HeaderLeftSide user={user} />
      {user ? (
        <HeaderNav />
      ) : !checkMobile() ? (
        <Button {...SmallLoginButtonType} title="로그인" onClick={onClick} />
      ) : 
      (<Button {...SmallLoginButtonType} color="#707070" title="로그인" onClick={onClick} />)}
    </Container>
  );
};

export default Header;
