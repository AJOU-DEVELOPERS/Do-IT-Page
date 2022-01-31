import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { testAtom } from "Recoil/test";

interface Props {
  component: () => JSX.Element;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: Props): JSX.Element => {
  const user = useRecoilValue(testAtom);

  return (
    <Route
      {...rest}
      exact
      render={() => (user ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
