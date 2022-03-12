import Header from "@Organisms/Common/Header";
import Content from "@Molecules/Content/studyProject";
import { Title } from "./styles";
import CreateWork from "@Molecules/Content/CreateWork";

const StudyTemp = () => {
  return (
    <>
      <Header />
      <Title>스터디</Title>
      <CreateWork type="study" />
      <Content type="study" />
    </>
  );
};
export default StudyTemp;
