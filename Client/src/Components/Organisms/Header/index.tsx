import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@Recoil/CheckLogin";

import { SmallLoginButtonType } from "@Style/.";

import Button from "@Atoms/Button";
import Container from "./styles";
import HeaderLeftSide from "@Molecules/Header";

const Header = ({ onClick }: { onClick: () => void }) => {
  const user = useRecoilValue(checkLoginSelector);

  return (
    <Container>
      <HeaderLeftSide />
      {user ? (
        <img src="/user_icon.png" alt="유저아이콘" onClick={onClick} />
      ) : (
        <Button {...SmallLoginButtonType} title="로그인" onClick={onClick} />
      )}
    </Container>
  );
};

export default Header;
