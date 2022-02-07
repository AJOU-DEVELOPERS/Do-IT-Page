import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
`;

const AdminContainer = styled(Container)`
  padding: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LeftAdminContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10vw;
`;

export { Container, Title, AdminContainer, LeftAdminContainer };
