export interface IModalProps {
}

export interface IStyledModalProps {
  maximized: boolean;
}

export interface IStyledModalContentProps extends IStyledModalProps {}

export interface IModalContext {
  maximized: boolean;
  open: boolean;
}
