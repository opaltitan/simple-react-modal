/// <reference types="react" />
import { ModalParams } from './models/models';
export declare namespace Modal {
    const Component: (params: ModalParams) => JSX.Element | null;
    interface Params extends ModalParams {
    }
}
