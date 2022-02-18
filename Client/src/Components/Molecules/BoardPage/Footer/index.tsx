import React, { Dispatch, SetStateAction, useMemo } from "react";
import { BoardFooterContainer, BoardFooterItem } from "./styles";

const FOOTER_LIST_LENGTH = 5;

const Footer = ({
  noticePageNum,
  setNoticePageNum,
  totalBoardContentLength,
}: {
  noticePageNum: number;
  setNoticePageNum: Dispatch<SetStateAction<number>>;
  totalBoardContentLength: number;
}) => {
  const handleButtonClick = (e: any) => {
    //   const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e?.target?.closest("#target");
    if (!target) return;
    setNoticePageNum(Number(target.getAttribute("data-idx")) - 1);
  };

  const totalList = useMemo(() => {
    return new Array(totalBoardContentLength).fill(1).map((_, idx) => idx);
  }, [totalBoardContentLength]);

  const arrList =
    noticePageNum < FOOTER_LIST_LENGTH
      ? totalList.filter((item) => item < 2 * FOOTER_LIST_LENGTH)
      : noticePageNum > totalBoardContentLength - FOOTER_LIST_LENGTH
      ? totalList.filter(
          (item) => item > totalBoardContentLength - 2 * FOOTER_LIST_LENGTH
        )
      : totalList.filter(
          (item) =>
            noticePageNum - FOOTER_LIST_LENGTH < Number(item) &&
            Number(item) < noticePageNum + FOOTER_LIST_LENGTH
        );

  return (
    <BoardFooterContainer onClick={handleButtonClick}>
      {arrList.map((item, idx) => (
        <BoardFooterItem
          key={item}
          id="target"
          data-idx={Number(item) + 1}
          style={{ color: item === noticePageNum ? "#d3d1d1" : "" }}
        >
          {item + 1}
        </BoardFooterItem>
      ))}
    </BoardFooterContainer>
  );
};

export default Footer;
