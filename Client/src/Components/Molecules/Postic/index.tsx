import { Container, Chip, Wrapper } from "./styles";
import Button from "@Atoms/Button";
interface Props {
  title: string;
  studyLeader: string;
  status: string;
  member: number;
}

interface PosticProps extends Props {
  handlePosticClick: (value: Props) => void;
}
const Postic = ({ title, studyLeader, status, member, handlePosticClick }: PosticProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>이름 : {studyLeader}</p>
      <p>인원 : 1 / {member}</p>
      <Wrapper>
        <Chip>{status}</Chip>
        <Button
          {...{
            width: "60px",
            height: "30px",
            title: "신청",
            backGroundColor: "rgba(255,255,255,0.1)",
            borderColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={() => handlePosticClick({ title, studyLeader, status, member })}
        />
      </Wrapper>
    </Container>
  );
};

export default Postic;

Postic.defaultProps = {
  title: "구합니다.",
  studyLeader: "차재명",
  status: "진행중",
  member: 5,
};
