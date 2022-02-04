import Button from "@Atoms/Button";
import { SmallButtonType } from "@Constant/.";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <div>로그인 전 페이지</div>
      <Link to="/login">
        <Button {...SmallButtonType} />
      </Link>
    </>
  );
};

export default Page;
