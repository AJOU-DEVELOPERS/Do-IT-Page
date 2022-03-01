import { useState } from "react";
import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import CreateWork from "./Create";
import GetWork from "./Get";
import { ButtonContainer, WorkContainerStyle } from "./styles";
import { BasicType } from "./type";

const WorkContainer = ({ type }: BasicType) => {
  const [create, setCreate] = useState<boolean>(false);

  const handleToggleStudy = () => {
    setCreate(!create);
  };

  return (
    <WorkContainerStyle>
      <ButtonContainer>
        <Button
          {...SmallButtonType}
          color="#000000"
          onClick={handleToggleStudy}
          title={create ? "돌아가기" : `${type} 생성`}
        />
      </ButtonContainer>
      {create && <CreateWork type={type} />}
      {!create && <GetWork type={type} />}
    </WorkContainerStyle>
  );
};

export default WorkContainer;
