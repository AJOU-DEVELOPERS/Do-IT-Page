import { useEffect } from "react";

const useCloseModal = ({
  ref,
  fn,
}: {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  fn: () => void;
}) => {
  const handleModalOutClick = ({ target }: { target: any }) => {
    if (!ref.current) return;
    if (!ref.current.contains(target)) fn();
  };
  useEffect(() => {
    window.addEventListener("click", handleModalOutClick);
    return () => {
      window.removeEventListener("click", handleModalOutClick);
    };
  });
};

export default useCloseModal;
