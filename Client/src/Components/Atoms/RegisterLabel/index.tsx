import Input from "@Atoms/Input";
import { BasicInputProps } from "@Type/.";

const RegisterLabel = (props: BasicInputProps) => {
  return (
    <>
      <div>아이디</div>
      <Input {...props} />
    </>
  );
};

export default RegisterLabel;
