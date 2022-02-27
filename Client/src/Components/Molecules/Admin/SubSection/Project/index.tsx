import { useState } from "react";
import CreateProject from "./CreateProject";
import GetProject from "./GetProject";

const ProjectContainer = () => {
  const [create, setCreate] = useState(false);

  const handleToggleProject = () => {
    setCreate(!create);
  };

  return (
    <>
      <div onClick={handleToggleProject}>
        {create ? "돌아가기" : "스터디 생성"}
      </div>

      {create && <CreateProject />}
      {!create && <GetProject />}
    </>
  );
};

export default ProjectContainer;
