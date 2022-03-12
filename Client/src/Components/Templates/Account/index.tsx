import AccountForm from "@Organisms/Account";
import { BackGround, Container } from "./styles";

const AccountTemplate = ({ type }: { type: string }) => {
  return (
    <Container>
      <BackGround />
      <AccountForm type={type} />
    </Container>
  );
};

export default AccountTemplate;
