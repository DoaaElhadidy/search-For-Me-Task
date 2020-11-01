import { Subscription } from 'rxjs';
import { FilterBy } from 'src/app/core/models/filterBy.enum';
import { FilterCondition } from './../../../core/models/filterCondition.enum';
import { ModalData } from './../../../core/models/modal-data.model';
import { ModalSubjectData } from './../../../core/models/modal-subject-data.model';
import { IEmployee } from '../../models/employee.model';
import { ModalService } from '../../../core/services/modal.service';
import { EmployeesService } from '../../services/employees.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  employees: IEmployee[];
  language: string = 'en';
  displayedEmployees: IEmployee[];
  subscriptions: Subscription = new Subscription();

  constructor(
    private employeesService: EmployeesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.employeesService.getEmployees().subscribe((response: any) => {
        this.employees = response.data.employees;
        this.displayedEmployees = this.employees;
      })
    );
  }

  setLanguage(language: string) {
    this.language = language;
  }

  onAddFilter() {
    this.modalService.openModal(
      new ModalSubjectData({
        showModal: true,
        modalData: new ModalData({
          cancelHandler: this.closeModal,
          confirmHandler: this.filterEmployees,
        }),
      })
    );
  }

  closeModal = () => {
    this.modalService.closeModal();
  };

  filterEmployees = (
    filter: FilterBy,
    filterCondition: FilterCondition,
    minSalary: string,
    maxSalary: string,
    minDate: Date,
    maxDate: Date
  ) => {
    this.displayedEmployees = this.employees.filter((employee: IEmployee) => {
      if (filterCondition === FilterCondition.before) {
        if (filter === FilterBy.salary) {
          return +employee.firstContractingSalary < +minSalary;
        } else {
          return new Date(employee.hiringDate) < minDate;
        }
      } else if (filterCondition === FilterCondition.after) {
        if (filter === FilterBy.salary) {
          return +employee.firstContractingSalary > +minSalary;
        } else {
          return new Date(employee.hiringDate) > minDate;
        }
      } else {
        if (filter === FilterBy.salary) {
          return (
            +employee.firstContractingSalary > +minSalary &&
            +employee.firstContractingSalary < +maxSalary
          );
        } else {
          return (
            new Date(employee.hiringDate) > minDate &&
            new Date(employee.hiringDate) < maxDate
          );
        }
      }
    });
    this.modalService.closeModal();
  };

  searchByName(searchString) {
    this.displayedEmployees = this.employees.filter((employee) =>
      employee.fullName_FL.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  trackEmployeeById(index: number, employee: IEmployee): string {
    return employee.id;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
