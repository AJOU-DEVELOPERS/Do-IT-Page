import EnterButton from "@Atoms/Button/Enter";

import { Box, ButtonContainer, Container } from "./styles";
import { MainPageLastButtonType } from "@Style/.";

const EnterDoIt = ({ onClick }: { onClick: () => void }) => {
  return (
    <Container>
      <Box>
        <ButtonContainer>
          <EnterButton
            {...MainPageLastButtonType}
            title="Do,IT Now"
            onClick={onClick}
          />
        </ButtonContainer>
      </Box>
    </Container>
  );
};

export default EnterDoIt;
