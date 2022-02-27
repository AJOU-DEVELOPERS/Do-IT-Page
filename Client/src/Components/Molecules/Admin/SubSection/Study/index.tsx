import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import { useState } from "react";
import CreateStudy from "./CreateStudy";
import GetStudy from "./GetStudy";
import { ButtonContainer, StudyContainerStyle } from "./styles";

const StudyContainer = () => {
  const [create, setCreate] = useState(false);

  const handleToggleStudy = () => {
    setCreate(!create);
  };

  return (
    <StudyContainerStyle>
      <ButtonContainer>
        <Button
          {...SmallButtonType}
          color="#000000"
          onClick={handleToggleStudy}
          title={create ? "돌아가기" : "스터디 생성"}
        />
      </ButtonContainer>
      {create && <CreateStudy />}
      {!create && <GetStudy />}
    </StudyContainerStyle>
  );
};

export default StudyContainer;
