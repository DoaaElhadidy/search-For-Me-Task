import { Position, IPosition } from './position.model';
import { Department, IDepartment } from './department.model';
import { IEmployeeJobStatus } from './employeeJobStatus.model';

export interface IEmployee {
  id: string;
  fullName_FL: string;
  fullName_SL: string;
  hiringDate: string;
  firstContractingSalary: string;
  position: IPosition;
  department: IDepartment;
  employeeJobStatuses: IEmployeeJobStatus[];
}

export class Employee implements IEmployee {
  id: string = '';
  fullName_FL: string = '';
  fullName_SL: string = '';
  hiringDate: string = '';
  firstContractingSalary: string = '';
  position: IPosition = new Position();
  department: IDepartment = new Department();
  employeeJobStatuses: IEmployeeJobStatus[] = [];

  constructor(initializer?: IEmployee) {
    if (initializer) {
      this.id = initializer.id;
      this.fullName_FL = initializer.fullName_FL;
      this.fullName_SL = initializer.fullName_SL;
      this.hiringDate = initializer.hiringDate;
      this.firstContractingSalary = initializer.firstContractingSalary;
      this.position = initializer.position;
      this.department = initializer.department;
      this.employeeJobStatuses = initializer.employeeJobStatuses;
    }
  }
}
