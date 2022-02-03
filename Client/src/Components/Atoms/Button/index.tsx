import ButtonContainer from "./styles";

export interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  backGroundColor?: string;
  title?: string;
  onClick?: () => void;
}

const Button = ({
  width,
  height,
  borderColor,
  backGroundColor,
  title,
  onClick,
}: Props) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      borderColor={borderColor}
      backGroundColor={backGroundColor}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  width: 150,
  height: 50,
  borderColor: "#000000",
  backGroundColor: "#ffffff",
  title: "Click !",
};
export default Button;
