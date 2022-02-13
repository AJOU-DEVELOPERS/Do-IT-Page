import { useState } from "react";

import Hamburger from "@Atoms/Hamburger";
import Logo from "@Atoms/Logo";
import SideBar from "@Molecules/SideBar";
import Section from "@Molecules/Section";
import Header from "@Organisms/Header/admin";

import { Container, AdminLogo, Title } from "./styles";

const AdminTemp = () => {
  const [category, setCategory] = useState<number>(0);

  const handleCategory = (number: number) => {
    setCategory(number);
  };
  return (
    <Container>
      <AdminLogo>
        <Logo />
        <Title>Do-IT</Title>
        <Hamburger />
      </AdminLogo>
      <Header category={category} />
      <SideBar handleCategory={handleCategory} />
      <Section />
    </Container>
  );
};

export default AdminTemp;
