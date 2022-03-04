import { ReactElement } from "react";
import { Navigate, Route } from "react-router-dom";

interface Props {
  element: ReactElement;
  path: string;
}

const AdminRoute = ({ element: Component, path }: Props): JSX.Element => {
  const admin = true;

  return (
    <Route
      path={path}
      element={() => (admin ? Component : <Navigate to="/error" />)}
    />
  );
};

export default AdminRoute;
