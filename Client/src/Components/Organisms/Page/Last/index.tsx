import Button from "@Atoms/Button";
import Context from "@Molecules/Content";
import { CONTENT, MainPageLastButtonType } from "@Constant/.";
import { Box, ButtonContainer, Container } from "./styles";

const Last = ({ onClick }: { onClick: () => void }) => {
  const { title, text } = CONTENT[8];
  return (
    <Container>
      <Box>
        <Context title={title} text={text} />
        <ButtonContainer>
          <Button {...MainPageLastButtonType} title="Do IT" onClick={onClick} />
        </ButtonContainer>
      </Box>
    </Container>
  );
};

export default Last;
