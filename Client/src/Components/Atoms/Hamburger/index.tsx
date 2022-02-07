import Container from "./styles";

const Hamburger = ({ handleClick }: { handleClick: () => void }) => <Container alt="hamburger" onClick={handleClick} />;

export default Hamburger;
