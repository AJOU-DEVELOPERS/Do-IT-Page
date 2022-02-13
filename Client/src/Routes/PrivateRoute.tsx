import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@src/Recoil/CheckLogin";

interface Props {
  component: () => JSX.Element;
  path: string;
  exact: boolean;
}

const PrivateRoute = ({
  component: Component,
  path,
  exact,
}: Props): JSX.Element => {
  // const user = useRecoilValue(checkLoginSelector);
  const user = true;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (user ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
