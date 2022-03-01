import { Dispatch } from "react";

const TechStack = ({
  stackRef,
  stack,
  setStack,
}: {
  stackRef: React.MutableRefObject<HTMLInputElement | null>;
  stack: string[];
  setStack: Dispatch<string[]>;
}) => {
  const handleAddStack = () => {
    if (!stackRef.current) {
      alert("기술 스택을 입력하세요");
      return;
    }
    setStack([...stack, stackRef?.current?.value]);
  };
  return (
    <>
      {stack.map((item: string) => (
        <div>{item}</div>
      ))}
      <input ref={stackRef} placeholder="추가할 스택을 입력하세요" />
      <div onClick={handleAddStack}>추가하기</div>
    </>
  );
};
export default TechStack;
