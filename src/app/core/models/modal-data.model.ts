import { FilterCondition } from './filterCondition.enum';
import { FilterBy } from './filterBy.enum';
export interface IModalData {
  cancelHandler: () => void;
  confirmHandler: (
    filter?: FilterBy,
    filterCondition?: FilterCondition,
    minSalary?: string,
    maxSalary?: string,
    minDate?: Date,
    maxDate?: Date
  ) => void;
}

export class ModalData implements IModalData {
  cancelHandler: () => void = () => {};
  confirmHandler: (
    filter?: FilterBy,
    filterCondition?: FilterCondition,
    minSalary?: string,
    maxSalary?: string,
    minDate?: Date,
    maxDate?: Date
  ) => void = () => {};

  constructor(initializer?: IModalData) {
    if (initializer) {
      this.cancelHandler = initializer.cancelHandler;
      this.confirmHandler = initializer.confirmHandler;
    }
  }
}
