import Header from "@Organisms/Common/Header";
import Content from "@Molecules/Content/studyProject";
import { useCallback } from "react";
import { Title } from "./styles";
const ProjectTemp = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);
  return (
    <>
      <Header onClick={handleUserIconClick} />
      <Title>프로젝트</Title>
      <Content type="project" />
    </>
  );
};

export default ProjectTemp;
