import Container from "./styles";

export interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}

const Input = (props: Props) => {
  const { inputRef } = props;
  return <Container {...props} ref={inputRef} />;
};

Input.defaultProps = {
  width: 150,
  height: 50,
  borderColor: "#ffffff",
  margin: "0",
  padding: "0",
  background: "#ffffff",
  type: "text",
};

export default Input;
