import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2vmin;
  color: white;
`;

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

const LeftAdminContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10vw;
`;

export { Container, Title, AdminContainer, LeftAdminContainer };
