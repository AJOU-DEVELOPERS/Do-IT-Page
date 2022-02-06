import { BasicButtonProps } from "@src/Common/Type";
import { ButtonContainer } from "./styles";

const Button = (props: BasicButtonProps) => {
  const { title } = props;
  return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

Button.defaultProps = {
  width: "150px",
  height: "50px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  title: "Click !",
};
export default Button;
