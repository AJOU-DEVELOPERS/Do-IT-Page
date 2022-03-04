import { ReactElement, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkLoginNow } from "@src/Recoil/CheckLogin";

interface Props {
  element: ReactElement;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ element: Component, path }: Props): JSX.Element => {
  const [user, setUser] = useRecoilState<boolean | any>(checkLoginNow);
  useEffect(() => {
    if (!user) return;
    setUser(user);
  }, []);
  return (
    <Route
      path={path}
      element={() => (user ? Component : <Navigate to="/login" />)}
    />
  );
};

export default PrivateRoute;
