import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import { useState } from "react";
import { ButtonContainer, StudyContainerStyle } from "./styles";
import { getComponent, getCreateComponent } from "./util";

const StudyContainer = ({ type }: { type: string }) => {
  const [create, setCreate] = useState(false);
  const CreateComponent = getCreateComponent({ type });
  const GetComponent = getComponent({ type });

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
          title={create ? "돌아가기" : `${type} 생성`}
        />
      </ButtonContainer>
      {create && <CreateComponent />}
      {!create && <GetComponent />}
    </StudyContainerStyle>
  );
};

export default StudyContainer;
