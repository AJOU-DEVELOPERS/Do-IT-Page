import RegisterInput from "@Molecules/Account/RegisterInput";
import LoginInput from "./LoginInput";

const AccountFormItem = ({ type }: { type: string }) => {
  return (
    <>
      {type === "Login" && <LoginInput />}
      {type === "Register" && <RegisterInput />}
    </>
  );
};

export default AccountFormItem;
