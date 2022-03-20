import React, { Children, ReactNode, useRef } from "react";
import { Slider, Container } from "./styles";

// carousel 다른 프로젝트에서도 재사용 가능 판단하여 interface를 추출하지 않음.
interface CarouselProps {
  children: ReactNode;
  timer: number;
}

const Carousel = ({ children, timer }: CarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let currentSlide = 1;

  setInterval(() => {
    if (!sliderRef?.current) return;

    sliderRef.current.style.transition = "all 0.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.

    currentSlide = calCurrentNum({
      total: Children.count(children),
      prev: currentSlide,
    });
  }, timer);

  return (
    <Container>
      <Slider ref={sliderRef}>{children}</Slider>
    </Container>
  );
};

const calCurrentNum = ({ total, prev }: { total: number; prev: number }) => {
  if (total === prev + 1) return 0;
  return prev + 1;
};

export default React.memo(Carousel);
