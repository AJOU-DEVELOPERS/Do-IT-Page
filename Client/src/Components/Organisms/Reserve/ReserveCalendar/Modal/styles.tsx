import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 29%;
  width: 350px;
  height: 300px;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 0px 14px #00000029;
  border: 1px solid #ffffff;
  border-radius: 37px;
  display: flex;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

export const ModalSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  button {
    font-size: 23px;
    color: #d8d8d8;
  }
`;

export const ModalContentHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #42556b;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ModalContentFooter = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #858585;
  }
`;

export const ReserveDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin-bottom: 14px;
    color: #42556b;
  }
`;
