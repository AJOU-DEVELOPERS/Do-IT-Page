import { Container, Title, Date } from "./style";

interface Props {
  title: string;
  date: string;
  type: string;
}
const BoardPreview = ({ title, date, type }: Props) => {
  const handleBoardClick = () => {};

  return (
    <Container type={type} onClick={handleBoardClick}>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Container>
  );
};

export default BoardPreview;
