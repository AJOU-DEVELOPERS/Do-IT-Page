import Input from "@Atoms/Input";
import { Container } from "./styles";
import { BasicInputProps } from "@Type/.";

interface Props extends BasicInputProps {
  title: string;
}

const RegisterLabel = (props: Props) => {
  const { title } = props;
  return (
    <Container>
      <div>{title}</div>
      <Input {...props} />
    </Container>
  );
};

export default RegisterLabel;
