import { CONTENT } from "@Constant/.";
import { MIDDLE_IMG_URL } from "@Constant/img";
import Context from "@Molecules/Content";
import Content from "@Organisms/Before/Content";
import { Box, Container } from "./styles";

const DoItTodo = () => {
  return (
    <Box>
      <Container>
        {MIDDLE_IMG_URL.map((item, idx) => (
          <Content text={() => Context(CONTENT[idx + 1])} url={item} />
        ))}
      </Container>
    </Box>
  );
};

export default DoItTodo;
