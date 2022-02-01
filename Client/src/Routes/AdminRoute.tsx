import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { testAtom } from "Recoil/test";

interface Props {
  component: () => JSX.Element;
  path: String;
}

const AdminRoute = ({
  component: Component,
  path,
  ...rest
}: Props): JSX.Element => {
  const admin = useRecoilValue(testAtom);

  return (
    <Route
      {...rest}
      exact
      render={() => (admin ? <Component /> : <Redirect to="/error" />)}
    />
  );
};

export default AdminRoute;
