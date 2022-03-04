import { Navigate, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkLoginNow } from "@src/Recoil/CheckLogin";
import { ReactElement, useEffect } from "react";

interface Props {
  element: ReactElement;
  path: string;
}

const PublicRoute = ({ element: Component, path }: Props): JSX.Element => {
  const [user, setUser] = useRecoilState<boolean | any>(checkLoginNow);
  useEffect(() => {
    if (!user) return;
    setUser(user);
  }, []);
  return (
    <Route
      path={path}
      element={() => (user ? <Navigate to="/main" /> : Component)}
    />
  );
};

export default PublicRoute;
