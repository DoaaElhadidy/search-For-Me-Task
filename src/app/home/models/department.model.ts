export interface IDepartment {
  id: string;
  name_FL: string;
  name_SL: string;
}

export class Department implements IDepartment {
  id: string = '';
  name_FL: string = '';
  name_SL: string = '';

  constructor(initializer?: IDepartment) {
    if (initializer) {
      this.id = initializer.id;
      this.name_FL = initializer.name_FL;
      this.name_SL = initializer.name_SL;
    }
  }
}
