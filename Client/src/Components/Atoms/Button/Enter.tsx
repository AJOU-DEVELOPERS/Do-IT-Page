import { LoginButtonProps } from "@src/Common/Type";
import { EnterContainer } from "./styles";

const EnterButton = (props: LoginButtonProps) => {
  const { title } = props;
  return <EnterContainer {...props}>{title}</EnterContainer>;
};

EnterButton.defaultProps = {
  width: "150px",
  height: "50px",
  color: "#000000",
  fontSize: "16px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  radius: "10px",
  title: "Click !",
};

export default EnterButton;
