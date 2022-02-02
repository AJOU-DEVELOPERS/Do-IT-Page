import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@src/Recoil/CheckLogin";

interface Props {
  component: () => JSX.Element;
  path: string;
}

const PrivateRoute = ({ component: Component, path }: Props): JSX.Element => {
  const user = useRecoilValue(checkLoginSelector);

  return (
    <Route
      path={path}
      render={() => (user ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
