import { Title, Text } from "./styles";

interface Props {
  title: string;
  text: string;
}

const Context = ({ title, text }: Props) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>
        {text.split(`\n`).map((item) => (
          <Text>{item}</Text>
        ))}
      </div>
    </div>
  );
};

export default Context;
