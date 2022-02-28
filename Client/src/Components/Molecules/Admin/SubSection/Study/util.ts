import CreateProject from "./CreateProject";
import CreateStudy from "./CreateStudy";
import GetProject from "./GetProject";
import GetStudy from "./GetStudy";

export const getCreateComponent = ({
  type,
}: {
  type: string;
}): (() => JSX.Element) => {
  switch (type) {
    case "스터디":
      return CreateStudy;
    default:
      return CreateProject;
  }
};
export const getComponent = ({
  type,
}: {
  type: string;
}): (() => JSX.Element) => {
  switch (type) {
    case "스터디":
      return GetStudy;
    default:
      return GetProject;
  }
};
