export interface BasicType {
  type?: string;
}

export interface ModalType extends BasicType {
  handleToggleStudy: () => void;
}
