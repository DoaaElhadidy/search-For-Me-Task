export interface IEmployeeJobStatus {
  id: string;
  status: string;
  type: string;
  terminationDate: string;
  suspendFromDate: string;
  suspendToDate: string;
}

export class EmployeeJobStatus implements IEmployeeJobStatus {
  id: string = '';
  status: string = '';
  type: string = '';
  terminationDate: string = '';
  suspendFromDate: string = '';
  suspendToDate: string = '';

  constructor(initializer?: IEmployeeJobStatus) {
    if (initializer) {
      this.id = initializer.id;
      this.status = initializer.status;
      this.type = initializer.type;
      this.terminationDate = initializer.terminationDate;
      this.suspendFromDate = initializer.suspendFromDate;
      this.suspendToDate = initializer.suspendToDate;
    }
  }
}
