import { Background, Content } from "./styles";
import Portal from "@src/portal";
import { ReactChild, ReactChildren } from "react";
const Modal = ({
  children,
  onClick,
}: // onClick,
{
  children: ReactChild | ReactChildren;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <Portal>
      <Background onClick={onClick}>
        <Content>{children}</Content>
      </Background>
    </Portal>
  );
};

export default Modal;
