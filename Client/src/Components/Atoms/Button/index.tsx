import ButtonContainer from "./styles";

export interface Props {
  width?: number;
  height?: number;
  borderColor?: string;
  backGroundColor?: string;
  title?: string;
}

const Button = ({
  width,
  height,
  borderColor,
  backGroundColor,
  title,
}: Props) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      borderColor={borderColor}
      backGroundColor={backGroundColor}
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
