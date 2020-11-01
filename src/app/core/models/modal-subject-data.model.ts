import { IModalData, ModalData } from './modal-data.model';

export interface IModalSubjectData {
  showModal: boolean;
  modalData: IModalData;
}

export class ModalSubjectData implements IModalSubjectData {
  showModal: boolean = false;
  modalData: IModalData = new ModalData();

  constructor(initializer?: IModalSubjectData) {
    if (initializer) {
      this.showModal = initializer.showModal;
      this.modalData = initializer.modalData;
    }
  }
}
