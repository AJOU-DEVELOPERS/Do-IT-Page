import Button from "@Atoms/Button/Login";
import { ADMIN_CATEGORY } from "@Constant/index";
import { Title, AdminContainer } from "./styles";

const SmallLoginButtonType = {
  width: "100px",
  height: "30px",
  borderColor: "#FCF9EF",
  backGroundColor: "#FCF9EF",
  fontSize: "18px",
  radius: "20px",
};

const AdminHeader = ({ category }: { category: number }) => {
  return (
    <AdminContainer>
      <Title>{ADMIN_CATEGORY[category]}</Title>
      <Button {...SmallLoginButtonType} title={"로그아웃"} />
    </AdminContainer>
  );
};

export default AdminHeader;
