import { FilterBy } from 'src/app/core/models/filterBy.enum';
import { FilterCondition } from './../../models/filterCondition.enum';
import { Component, Input, OnInit } from '@angular/core';
import { IModalData, ModalData } from '../../models/modal-data.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalData: IModalData = new ModalData();
  filters: FilterBy[] = [FilterBy.hiringDate, FilterBy.salary];

  filterConditions: FilterCondition[] = [
    FilterCondition.before,
    FilterCondition.after,
    FilterCondition.between,
  ];

  selectedFilter: FilterBy = FilterBy.salary;

  selectedCondition: FilterCondition = FilterCondition.before;

  minSalary: string = '';
  maxSalary: string = '';
  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
