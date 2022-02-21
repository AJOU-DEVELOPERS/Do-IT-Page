import RegisterInput from "@Molecules/Account/RegisterInput";
import LoginInput from "./LoginInput";
import { Container } from "./styles";

const AccountFormItem = ({ type }: { type: string }) => {
  return (
    <>
      {type === "Login" && <LoginInput />}
      {type === "Register" && <RegisterInput />}
    </>
  );
};

export default AccountFormItem;
