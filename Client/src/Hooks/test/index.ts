import { useState } from "react";

const useTestHook = (init: any): any[] => {
  const [test, setTest] = useState(init);

  const handleTest = (e: any): void => setTest(e.target.value);

  const handleTestInit = () => setTest(init);

  return [test, handleTest, handleTestInit];
};
