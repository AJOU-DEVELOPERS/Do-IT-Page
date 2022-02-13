import { LoginButtonProps } from "@src/Common/Type";
import { LoginContainer } from "./styles";

const LoginButton = (props: LoginButtonProps) => {
  const { title } = props;
  return <LoginContainer {...props}>{title}</LoginContainer>;
};

LoginButton.defaultProps = {
  width: 150,
  height: 50,
  color: "#000000",
  fontSize: "16px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  radius: "10px",
  title: "Click !",
};

export default LoginButton;
