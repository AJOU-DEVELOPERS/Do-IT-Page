import { Title, Text } from "./styles";

interface Props {
  title: string;
  text: string;
}

const Context = ({ title, text }: Props) => {
  const [colorText, nonColorText] = title.split("/");

  return (
    <div>
      {nonColorText ? (
        <Title>
          <span>{colorText}</span>
          {nonColorText}
        </Title>
      ) : (
        <Title>{title}</Title>
      )}
      <div>
        {text.split(`\n`).map((item) => (
          <Text>{item}</Text>
        ))}
      </div>
    </div>
  );
};

export default Context;
