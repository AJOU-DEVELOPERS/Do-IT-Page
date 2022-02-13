import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
export const ContenTitleContainer = styled.div`
  width: 80%;
  margin: 40px auto;
  &::after {
    content: "";
    display: block;
    margin: 10px 0px -10px 0px;
    border-bottom: 1px solid;
  }
`;
