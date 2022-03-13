import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactElement;
}

const UpdateRoute = ({ children: Component }: Props): React.ReactElement => {
  return <Navigate to="/update" />;
};

export default UpdateRoute;
