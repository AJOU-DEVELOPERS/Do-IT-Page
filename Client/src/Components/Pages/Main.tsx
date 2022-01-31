import { sayHello } from "@Util/.";

export default function MainPage() {
  const root = sayHello();
  return <div>{root}</div>;
}
