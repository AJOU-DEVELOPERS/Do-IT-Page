import { BasicInputProps } from "@src/Common/Type";
import Container from "./styles";

const Input = (props: BasicInputProps) => {
  const { inputRef } = props;
  return <Container {...props} ref={inputRef} />;
};

Input.defaultProps = {
  width: "100%",
  height: "100%",
  borderColor: "#ffffff",
  margin: "0px",
  padding: "0px",
  background: "#ffffff",
  type: "text",
  radius: "",
};

export default Input;
