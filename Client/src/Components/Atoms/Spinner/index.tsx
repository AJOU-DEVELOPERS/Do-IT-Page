import Spinner from "./styles";
import { Oval } from "react-loader-spinner";

const Spin = () => {
  return (
    <Spinner>
      <Oval color="blue" width={100} height={100} />
    </Spinner>
  );
};

export default Spin;
