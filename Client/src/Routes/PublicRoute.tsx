import { Redirect, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkLoginNow } from "@src/Recoil/CheckLogin";
import { ReactElement, useEffect } from "react";

interface Props {
  element: ReactElement;
  path: string;
  exact: boolean;
}

const PublicRoute = ({
  element: Component,
  path,
  exact,
}: Props): JSX.Element => {
  const [user, setUser] = useRecoilState<boolean | any>(checkLoginNow);
  useEffect(() => {
    if (!user) return;
    setUser(user);
  }, []);
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (user ? <Redirect to="/main" /> : Component)}
    />
  );
};

export default PublicRoute;
