export interface IPosition {
  id: string;
  fullName_FL: string;
  fullName_SL: string;
}

export class Position implements IPosition {
  id: string = '';
  fullName_FL: string = '';
  fullName_SL: string = '';

  constructor(initializer?: IPosition) {
    if (initializer) {
      this.id = initializer.id;
      this.fullName_FL = initializer.fullName_FL;
      this.fullName_SL = initializer.fullName_SL;
    }
  }
}
