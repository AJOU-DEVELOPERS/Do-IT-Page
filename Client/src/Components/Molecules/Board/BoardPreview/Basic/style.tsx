import { MOBILE_WIDTH, TABLET_WIDTH } from "@Constant/index";
import { AlignCenterBetween, HoverPointer, MainItemHover } from "@Style/.";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  ${AlignCenterBetween};
  padding: 12px 17px;
  box-sizing: border;
  ${HoverPointer};
  ${MainItemHover};
	justify-content: flex-start;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 6px 9px;
    height: 45px;
		flex-wrap: wrap;
		justify-content: flex-end;
  }
`;

const Text = styled.p`
  font-size: 0.8rem;
	margin-left: 0.5em;
  span {
    margin-right: 27px;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 0.75rem;
  }
`;

const Title = styled(Text)`
	width: 60%;
	margin-left: 0;
	@media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const Date = styled(Text)`
  width: auto;
  text-align: right;

	@media only screen and (max-width: ${MOBILE_WIDTH}px) {
		width: auto;
		margin-rigth: 5px;
  }
`;

export { Container, Text, Date, Title };
