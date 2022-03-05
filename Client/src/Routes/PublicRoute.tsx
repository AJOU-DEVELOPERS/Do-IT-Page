import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checkLoginNow } from "@src/Recoil/CheckLogin";
import { ReactElement, useEffect } from "react";

interface Props {
  children: ReactElement;
}

const PublicRoute = ({
  children: Component,
}: Props): React.ReactElement | null => {
  const [user, setUser] = useRecoilState<boolean | any>(checkLoginNow);
  useEffect(() => {
    if (!user) return;
    setUser(user);
  }, []);
  return user ? <Navigate to="/main" /> : Component;
};

export default PublicRoute;
