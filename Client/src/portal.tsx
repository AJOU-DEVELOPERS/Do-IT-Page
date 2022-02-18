import { ReactChildren, ReactChild } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: ReactChild | ReactChildren }) => {
  const element = typeof window !== "undefined" && document.getElementById("modal");
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
