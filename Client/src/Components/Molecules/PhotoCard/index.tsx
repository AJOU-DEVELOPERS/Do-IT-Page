import { ImgAltProps } from "@Type/.";
import { PhotoImage } from "./style";

const PhotoCard = ({ url, alt }: ImgAltProps) => {
  const handleClickPhotoCard = () => {};
  return <PhotoImage url={url} alt={alt} onClick={handleClickPhotoCard} />;
};

export default PhotoCard;
