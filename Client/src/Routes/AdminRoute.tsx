import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactElement;
}

const AdminRoute = ({
  children: Component,
}: Props): React.ReactElement | null => {
  const admin = true;

  return admin ? Component : <Navigate to="/error" />;
};

export default AdminRoute;
