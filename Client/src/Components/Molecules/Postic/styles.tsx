import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  padding: 2vw;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 240, 155, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  h2 {
    padding: 1rem;
    font-size: large;
  }
`;

const Chip = styled.p`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 0.2rem;
  border-radius: 10px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    color: black;
  }
`;

export { Container, Chip, Wrapper };
