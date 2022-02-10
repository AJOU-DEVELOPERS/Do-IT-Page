import { Container, Title, Date } from "./style";

interface Props {
  title: string;
  date: string;
  type: string;
}
const BoardPreview = ({ title, date, type }: Props) => {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Container>
  );
};

export default BoardPreview;
