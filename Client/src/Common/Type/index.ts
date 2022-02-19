export interface ImgProps {
  url?: string;
  width?: string;
}

export interface ContentImgProps extends ImgAltProps {
  radius?: string;
}

export interface ImgAltProps extends ImgProps {
  alt: string;
}

export interface DateProps {
  year: number;
  month: number;
}

export interface DateAction {
  type: "increment" | "decrement";
}

interface BasicAtomProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

export interface BasicButtonProps extends BasicAtomProps {
  backGroundColor?: string;
  title?: string;
  color?: string;
  onClick?: () => void;
}

export interface LoginButtonProps extends BasicButtonProps {
  fontSize?: string;
  radius?: string;
}

export interface ApplyButtonProps extends BasicButtonProps {
  backGroundColor?: string;
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

export interface BoardType {
  boardType?: string;
  apiSrc: string;
  pageSrc: string;
  previewSize?: number;
  previewType?: string;
  alignPreview?: string;
}

export interface BoardInfoType {
  [index: string]: BoardType;
}

export interface BoardContentType {
  index: number;
  board: string;
  title: string;
  text: string;
  date: string;
  images: string[];
  writer: string;
  onClick?: () => void;
}

export interface StudyContentType {
  index: number;
  name: string;
  decription: string;
  totalHeadcount: number;
  leaderUserIdx: number;
  leaderName: string;
  status: string;
  onClick?: () => void;
}

export interface ProjectContentType extends StudyContentType {
  techStack?: string[];
}

export interface RankingContentType {
  index: number;
  rating: number;
  tier: string;
  name: string;
}

export interface PreviewProps {
  previewType?: string;
  content: ContentType;
  onClick?: () => void;
}

export type ContentType =
  | BoardContentType
  | ProjectContentType
  | RankingContentType;
