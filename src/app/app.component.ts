import { IModalSubjectData } from './core/models/modal-subject-data.model';
import { ModalService } from './core/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModalData, ModalData } from './core/models/modal-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subscriptions: Subscription = new Subscription();
  isLoading: boolean = false;
  showModal: boolean = false;
  modalData: IModalData = new ModalData();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.modalService.modalSubject.subscribe((data: IModalSubjectData) => {
        this.showModal = data.showModal;
        this.modalData = data.modalData;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
