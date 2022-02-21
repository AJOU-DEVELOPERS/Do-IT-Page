import Input from "@Atoms/Input";
import { Container } from "./styles";
import { BasicInputProps } from "@Type/.";

interface Props extends BasicInputProps {
  title: string;
  inputRef?: React.RefObject<HTMLInputElement> | undefined;
}

const RegisterLabel = (props: Props) => {
  const { title, inputRef } = props;
  return (
    <Container>
      <div>{title}</div>
      <Input {...props} />
    </Container>
  );
};

export default RegisterLabel;
