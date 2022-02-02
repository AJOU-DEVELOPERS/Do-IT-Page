import { Redirect, Route } from "react-router-dom";

interface Props {
  component: () => JSX.Element;
  path: string;
}

const AdminRoute = ({ component: Component, path }: Props): JSX.Element => {
  const admin = false;

  return (
    <Route
      path={path}
      render={() => (admin ? <Component /> : <Redirect to="/error" />)}
    />
  );
};

export default AdminRoute;
