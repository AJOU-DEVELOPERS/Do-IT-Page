import { ImgAltProps } from "@Type/.";
import Container from "./styles";

const Logo = ({ url, alt }: ImgAltProps) => <Container alt={alt} url={url} />;

export default Logo;
