import { BasicButtonProps } from "@src/Common/Type";
import { ButtonContainer } from "./styles";

const Button = (props: BasicButtonProps) => {
  const { title } = props;
  return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

Button.defaultProps = {
  width: "100%",
  height: "80%",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  title: "Click !",
};
export default Button;
