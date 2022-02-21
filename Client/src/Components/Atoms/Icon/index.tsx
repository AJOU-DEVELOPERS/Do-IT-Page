import { ImgAltProps } from "@Type/.";
import Container from "./style";

const Icon = ({ url, alt }: ImgAltProps) => <Container alt={alt} url={url} />;

export default Icon;
