import { useState } from "react";
import { Container, Button, Content } from "./styles";

interface ContentProps {
  number: number;
  createAt: Date;
  name: string;
}

const PostContent = ({ number, createAt, name }: ContentProps) => {
  const [approval, setApproval] = useState<string>("승인");
  const handleChange = () => setApproval((v) => (v === "승인" ? "미승인" : "승인"));
  return (
    <Container>
      <Content>{number}</Content>
      <Content>{createAt.toDateString()}</Content>
      <Content>{name}</Content>
      <Content>
        <Button onClick={handleChange}>{approval}</Button>
      </Content>
    </Container>
  );
};
export default PostContent;
