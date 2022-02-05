import ButtonContainer from "./styles";

export interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  backGroundColor?: string;
  title?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const { title } = props;
  return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

Button.defaultProps = {
  width: 150,
  height: 50,
  color: "#000000",
  fontSize: "16px",
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  radius: "10px",
  title: "Click !",
};
export default Button;
