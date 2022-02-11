import { ADMIN_CATEGORY } from "@Constant/index";
import { Container, CategoryButton } from "./styles";

const SideBar = ({ handleCategory }: { handleCategory: (number: number) => void }) => {
  return (
    <Container>
      {ADMIN_CATEGORY.map((element, index) => (
        <CategoryButton key={index} onClick={() => handleCategory(index)}>
          {element}
        </CategoryButton>
      ))}
    </Container>
  );
};

export default SideBar;
