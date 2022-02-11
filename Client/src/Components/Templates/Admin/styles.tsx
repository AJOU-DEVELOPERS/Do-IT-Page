import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    "logo header" 1fr
    "sideBar section" 11fr
    / 1fr 7fr;
`;
const AdminLogo = styled.div`
  grid-area: logo;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2vmin;
`;
export { Container, AdminLogo, Title };
