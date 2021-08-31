export interface ModalParams {
  display: boolean;
  changeDisplay: (val: boolean) => void;
  title: string;
  children: JSX.Element;
}
