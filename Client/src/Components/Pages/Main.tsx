import { sayHello } from "@Util/.";

const MainPage = () => {
  const root = sayHello();
  return <div>{root}</div>;
};

export default MainPage;
