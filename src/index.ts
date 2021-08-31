import { ModalParams } from './models/models';
import { ModalComponent } from './Modal';

export namespace Modal {
  export const Component = ModalComponent;

  export interface Params extends ModalParams { }
};
