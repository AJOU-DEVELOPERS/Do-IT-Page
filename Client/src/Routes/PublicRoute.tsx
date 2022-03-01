import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { checkLoginSelector } from "@src/Recoil/CheckLogin";
import { LazyExoticComponent, ReactElement } from "react";

interface Props {
  // component: () => JSX.Element;
  element: ReactElement;
  // element: LazyExoticComponent<any>;
  path: string;
  exact: boolean;
}

const PublicRoute = ({
  element: Component,
  path,
  exact,
}: Props): JSX.Element => {
  // const user = useRecoilValue(checkLoginSelector);
  const user = false;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (user ? <Redirect to="/main" /> : Component)}
    />
  );
};

export default PublicRoute;
