import Button from "@Atoms/Button/Login";
import { ADMIN_CATEGORY } from "@Constant/.";
import { SmallLoginButtonType } from "@Style/.";
import { Title, AdminContainer } from "./styles";

const AdminHeader = ({ category }: { category: number }) => {
  return (
    <AdminContainer>
      <Title>{ADMIN_CATEGORY[category]}</Title>
      <Button {...SmallLoginButtonType} title={"로그아웃"} />
    </AdminContainer>
  );
};

export default AdminHeader;
