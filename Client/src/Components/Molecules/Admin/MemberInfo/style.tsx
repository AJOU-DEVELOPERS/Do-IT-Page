import {
  AlignCenterAround,
  AlignCenterBetween,
  HoverPointer,
  MainItemHover,
  textOverflowSafe,
} from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  ${AlignCenterAround};
  ${MainItemHover}
  ${HoverPointer}
  margin-top: 2%;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  font-color: black;
  ${textOverflowSafe};
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 8vh;
  ${AlignCenterAround};
  width: 80%;
`;
export const DetailTitle = styled.p`
  font-size: 1rem;
  color: black;
  width: 40%;
`;
export const DetailContent = styled.p`
  font-size: 1rem;
  width: 40%;
  color: black;
`;
