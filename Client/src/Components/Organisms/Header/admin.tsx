import Button from "@Atoms/Button/Login";
import Hamburger from "@Atoms/Hamburger";
import Logo from "@Atoms/Logo";

import { Title, AdminContainer, LeftAdminContainer } from "./styles";

const SmallLoginButtonType = {
  width: "150px",
  height: "50px",
  borderColor: "#ffffff",
  backGroundColor: "#8ECBF8",
  fontSize: "18px",
  radius: "20px",
};

const AdminHeader = ({ handleClickHamburger }: { handleClickHamburger: () => void }) => {
  return (
    <AdminContainer>
      <LeftAdminContainer>
        <Hamburger handleClick={handleClickHamburger} />
        <Logo />
        <Title>Do-IT</Title>
      </LeftAdminContainer>
      <Button {...SmallLoginButtonType} title={"로그아웃"} />
    </AdminContainer>
  );
};

export default AdminHeader;
