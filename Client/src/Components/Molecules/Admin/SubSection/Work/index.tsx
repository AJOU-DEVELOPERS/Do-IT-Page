import { BasicType } from "@Molecules/Content/type";
import GetWork from "./Get";
import { WorkContainerStyle } from "./styles";

const WorkContainer = ({ type }: BasicType) => (
  <WorkContainerStyle>
    <GetWork type={type} />
  </WorkContainerStyle>
);

export default WorkContainer;
