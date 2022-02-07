import { useState } from "react";

import SideBar from "@Molecules/SideBar";
import Section from "@Molecules/Section";

import Header from "@Organisms/Header/admin";

const AdminTemp = () => {
  const [hamburgerOnOff, setHamburgerOnOff] = useState<Boolean>(false);
  const [category, setCategory] = useState<number>(0);

  const handleClickHamburger = () => setHamburgerOnOff((v) => (v === true ? false : true));
  const handleCategory = (number: number) => {
    setCategory(number);
    setHamburgerOnOff(false);
  };
  return (
    <>
      <Header handleClickHamburger={handleClickHamburger} />
      <SideBar handleCategory={handleCategory} hamburgerOnOff={hamburgerOnOff} />
      <Section category={category} />
    </>
  );
};

export default AdminTemp;
