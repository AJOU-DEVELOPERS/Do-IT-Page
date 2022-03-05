import { Title, Text } from "./styles";

export interface ContextProps {
  title: string;
  text: string;
  type?: string | undefined;
}

const Context = ({ title, text, type }: ContextProps) => {
  const [colorText, nonColorText] = title.split("/");
  return (
    <div>
      {nonColorText ? (
        <Title type={type}>
          <span>{colorText}</span>
          {nonColorText}
        </Title>
      ) : (
        <Title type={type}>{title}</Title>
      )}
      <div>
        {text.split(`\n`).map((item) => (
          <Text type={type}>{item}</Text>
        ))}
      </div>
    </div>
  );
};

export default Context;
