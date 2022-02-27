import { useState } from "react";
import CreateStudy from "./CreateStudy";
import GetStudy from "./GetStudy";

const StudyContainer = () => {
  const [create, setCreate] = useState(false);

  const handleToggleStudy = () => {
    setCreate(!create);
  };

  return (
    <>
      <div onClick={handleToggleStudy}>
        {create ? "돌아가기" : "스터디 생성"}
      </div>
      {create && <CreateStudy />}
      {!create && <GetStudy />}
    </>
  );
};

export default StudyContainer;
