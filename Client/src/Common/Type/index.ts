export interface LoginButtonProps {
  width?: string;
  height?: string;
  borderColor?: string;
  backGroundColor?: string;
  title?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
  onClick?: () => void;
}

export interface BasicButtonProps {
  width?: string;
  height?: string;
  borderColor?: string;
  backGroundColor?: string;
  title?: string;
  onClick?: () => void;
}

export interface BasicInputProps {
  width?: string;
  height?: string;
  borderColor?: string;
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}
