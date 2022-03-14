import useCloseModal from "@src/Hook/useCloseModal";
import { useRef, useState } from "react";
import {
  Content,
  ModalContainer,
  ModalContent,
  ModalContentFooter,
  ModalContentHeader,
  ModalSide,
  ReserveDate,
} from "./styles";

const ReserveModal = ({
  items,
  order,
  setToggle,
  setOrder,
}: {
  items: any;
  order: any;
  setToggle: any;
  setOrder: any;
}) => {
  if (order > items.length - 1) {
    setOrder(0);
  }
  const item = items[order];

  const handlePrevClick = () => {
    if (order === 0) return;
    setOrder(order - 1);
  };
  const handleNextClick = () => {
    if (order === items.length - 1) return;
    setOrder(order + 1);
  };

  const Ref = useRef<HTMLDivElement>(null);
  const fn = () => setToggle(false);
  useCloseModal({ ref: Ref, fn });

  return (
    // <ReserveModal item={item} setOrder={setOrder} />
    <ModalContainer ref={Ref}>
      <ModalSide>
        <button className="ModalLeftButton" onClick={handlePrevClick}>
          {"<"}
        </button>
        {/* <button className="ModalLeftButton">{"<"}</button> */}
      </ModalSide>
      <ModalContent>
        <ModalContentHeader>
          <span>Host : {item.host}</span>
        </ModalContentHeader>
        <Content>
          <ReserveDate>
            <span>예약 날짜</span>
            <span>
              {item.date} - {item.date}
            </span>
          </ReserveDate>
          <ReserveDate>
            <span>예약 시간</span>
            <span>{item.hour}</span>
          </ReserveDate>
        </Content>
        <ModalContentFooter>
          <span>
            {order + 1}/{items.length}
          </span>
        </ModalContentFooter>
      </ModalContent>
      <ModalSide>
        {/* <button className="ModalLeftButton"> */}
        <button className="ModalLeftButton" onClick={handleNextClick}>
          {">"}
        </button>
      </ModalSide>
    </ModalContainer>
  );
};

export default ReserveModal;
