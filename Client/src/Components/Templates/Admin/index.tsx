import { useCallback, useState } from "react";

import Logo from "@Atoms/Logo";
import SideBar from "@Organisms/Admin/SideBar";
import Section from "@Organisms/Admin/Section";
import Header from "@Organisms/Admin/Header";

import { Container, AdminLogo, Title } from "./styles";

const AdminTemp = () => {
  const [category, setCategory] = useState<number>(0);

  const handleCategory = useCallback((number: number) => {
    setCategory(number);
  }, []);

  return (
    <Container>
      <AdminLogo>
        <Logo url="./assets/Header/Logo.svg" alt="Logo" />
        <Title>Do-IT</Title>
      </AdminLogo>
      <Header category={category} />
      <SideBar handleCategory={handleCategory} />
      <Section category={category} />
    </Container>
  );
};

export default AdminTemp;
