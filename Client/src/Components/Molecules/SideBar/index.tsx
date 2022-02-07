import { ADMIN_CATEGORY } from "@Constant/index";
import { Container, CategoryButton } from "./styles";

const SideBar = ({
  handleCategory,
  hamburgerOnOff,
}: {
  handleCategory: (number: number) => void;
  hamburgerOnOff: Boolean;
}) => {
  return (
    <Container style={hamburgerOnOff ? { transform: "translateX(0%)" } : {}}>
      {ADMIN_CATEGORY.map((element, index) => (
        <CategoryButton key={index} onClick={() => handleCategory(index)}>
          {element}
        </CategoryButton>
      ))}
    </Container>
  );
};

export default SideBar;
