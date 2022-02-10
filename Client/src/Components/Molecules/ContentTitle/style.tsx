import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 25px;
`;

export const Text = styled.p`
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;
