import { Container, Text } from "./style";
import { Props } from "./type";

const MemberInfo = ({ name, userId, studentId, createdAt }: Props) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Text>{userId}</Text>
      <Text>{studentId}</Text>
      <Text>{createdAt}</Text>
    </Container>
  );
};

export default MemberInfo;
