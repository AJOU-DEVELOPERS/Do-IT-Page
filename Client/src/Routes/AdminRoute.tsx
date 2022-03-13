import { getCheckAdminSelector } from "@Recoil/Admin";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

interface Props {
  children: ReactElement;
}

const AdminRoute = ({ children: Component }: Props): React.ReactElement | null => {
  const admin = useRecoilValue(getCheckAdminSelector);

  return admin ? Component : <Navigate to="/main" />;
};

export default AdminRoute;
