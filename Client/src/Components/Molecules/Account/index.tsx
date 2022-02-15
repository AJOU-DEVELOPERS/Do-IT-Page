import RegisterInput from "@Molecules/Account/RegisterInput";
import LoginInput from "./LoginInput";
import { Container, Left, Right } from "./styles";

const AccountFormItem = ({ type }: { type: string }) => {
  return (
    <>
      <Container>
        <Left />
      </Container>
      <Container>
        <Right>
          {type === "Login" && <LoginInput />}
          {type === "Register" && <RegisterInput />}
        </Right>
      </Container>
    </>
  );
};

export default AccountFormItem;
