import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@src/Recoil/CheckLogin";

interface Props {
  component: () => JSX.Element;
  path: string;
  exact: boolean;
}

const PublicRoute = ({
  component: Component,
  path,
  exact,
}: Props): JSX.Element => {
  const user = useRecoilValue(checkLoginSelector);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (user ? <Redirect to="/main" /> : <Component />)}
    />
  );
};

export default PublicRoute;
