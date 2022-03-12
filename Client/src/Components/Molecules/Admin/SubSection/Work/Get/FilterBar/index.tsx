import { Select, StudyFilterBarContainer } from "./styles";

const StudyFilterBar = ({
  handleWorkSearch,
}: {
  handleWorkSearch: ({
    target: { value },
  }: {
    target: { value: string };
  }) => void;
}) => {
  return (
    <StudyFilterBarContainer>
      <Select onChange={handleWorkSearch}>
        {STUDY_TYPE.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </Select>
    </StudyFilterBarContainer>
  );
};

export default StudyFilterBar;

const STUDY_TYPE = ["모집중", "진행중", "종료"];
