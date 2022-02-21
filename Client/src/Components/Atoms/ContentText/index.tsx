import { BasicText, PreviewContentText } from "./styles";

const ContentText = ({
  type = "basic",
  text,
}: {
  type: string;
  text: string;
}) => {
  const getText = (type: string): JSX.Element => {
    if (type === "preview")
      return <PreviewContentText>{text}</PreviewContentText>;
    return <BasicText>{text}</BasicText>;
  };
  return getText(type);
};

export default ContentText;
