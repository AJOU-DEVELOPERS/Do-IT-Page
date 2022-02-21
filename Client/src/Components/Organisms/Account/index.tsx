import AccountFormItem from "@Molecules/Account";
import { Container } from "./styles";

const AccountForm = ({ type }: { type: string }) => {
  return (
    <Container>
      <AccountFormItem type={type} />
    </Container>
  );
};

export default AccountForm;
