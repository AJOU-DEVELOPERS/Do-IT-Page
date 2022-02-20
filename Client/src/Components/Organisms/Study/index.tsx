import { ReactChild, ReactChildren, ReactFragment, ReactPortal } from "react";
import { Container, Title } from "./styles";

interface Props {
  title?: string;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const StudyContainer = (props: Props) => {
  const { title, children } = props;
  return (
    <>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </>
  );
};

export default StudyContainer;
