import { Container } from "@Organisms/Common/Header/styles";
import styled from "styled-components";

const AdminContainer = styled(Container)`
  grid-area: header;
  width: 100%;
  height: 100%;
  padding: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(172, 209, 251);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2vmin;
  color: white;
`;

export { AdminContainer, Title };
