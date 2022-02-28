import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import { getProjectAllSelector } from "@Recoil/Admin";
import StudyFilterBar from "../GetStudy/FilterBar";
import ProjectList from "./List";
import Project from "./Project";
import { ProjectSearch } from "./util";

const GetProject = () => {
  const totalProjectList = useRecoilValue(getProjectAllSelector);
  const [projectList, setProjectList] = useState(totalProjectList);
  const [project, setProject] = useState<any>();

  const handleProjectSearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    ProjectSearch({ value, projectList, setProjectList });
  };

  return (
    <Suspense fallback={null}>
      <StudyFilterBar handleStudySearch={handleProjectSearch} />
      <ProjectList projectList={projectList} setProject={setProject} />
      {project && <Project project={project} />}
    </Suspense>
  );
};

export default GetProject;
