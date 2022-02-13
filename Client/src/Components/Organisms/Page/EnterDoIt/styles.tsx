import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #f3f6f8;
  margin-top: 200px;
`;

const Box = styled.div`
  width: 500px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding: 50px;
`;

export { Container, Box, ButtonContainer };
