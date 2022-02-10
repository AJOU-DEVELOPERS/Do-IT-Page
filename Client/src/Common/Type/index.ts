export interface ImgProps {
  url: string;
}

interface BasicAtomProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

export interface BasicButtonProps extends BasicAtomProps {
  backGroundColor?: string;
  title?: string;
  onClick?: () => void;
}

export interface LoginButtonProps extends BasicButtonProps {
  color?: string;
  fontSize?: string;
  radius?: string;
}

export interface BasicInputProps extends BasicAtomProps {
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}

export interface BoardContentType {
  board: string;
  title: string;
  text: string;
  date: string;
  images: string[];
  writer: string;
}

export interface BoardType {
  boardType: string;
  apiSrc: string;
}
