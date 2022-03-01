import { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  element: ReactElement;
  path: string;
}

const AdminRoute = ({ element: Component, path }: Props): JSX.Element => {
  const admin = true;

  return (
    <Route
      path={path}
      render={() => (admin ? Component : <Redirect to="/error" />)}
    />
  );
};

export default AdminRoute;
