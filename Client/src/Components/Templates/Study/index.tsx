import Header from "@Organisms/Common/Header";
import Content from "@Molecules/Content/studyProject";
import { Title } from "./styles";

const StudyTemp = () => {
  return (
    <>
      <Header />
      <Title>스터디</Title>
      <Content type="study" />
    </>
  );
};
export default StudyTemp;
