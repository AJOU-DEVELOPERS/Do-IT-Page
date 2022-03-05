import { ReactElement, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkLoginNow } from "@src/Recoil/CheckLogin";

interface Props {
  children: ReactElement;
}

const PrivateRoute = ({
  children: Component,
}: Props): React.ReactElement | null => {
  const [user, setUser] = useRecoilState<boolean | any>(checkLoginNow);
  useEffect(() => {
    if (!user) return;
    setUser(user);
  }, []);
  return user ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
