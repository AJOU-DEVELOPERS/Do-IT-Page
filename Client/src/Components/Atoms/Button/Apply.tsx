import { ApplyButtonProps } from "@Type/.";
import { ButtonContainer } from "./styles";

const ApplyButton = (props: ApplyButtonProps) => {
  const { title } = props;
  return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

ApplyButton.defaultProps = {};

export default ApplyButton;
