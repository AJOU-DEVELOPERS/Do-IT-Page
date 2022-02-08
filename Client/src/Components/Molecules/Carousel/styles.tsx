import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(151, 148, 148, 0.5);
  }
`;

const Slider = styled.div`
  display: flex;
  display: -webkit-box;
  width: 100%;
`;

export { Slider, Container };
