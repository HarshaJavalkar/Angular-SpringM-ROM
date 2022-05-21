import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { GetOrdersService } from '../get-orders.service';
import { LoaderService } from '../loader.service';
import { ProcessingService } from '../processing.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  editable: boolean = false;
  form: any;
  constructor(
    private order: GetOrdersService,
    private processing: ProcessingService,
    private router: Router,
    private spinner: LoaderService
  ) {}
  orders: any;
  selectedItem: any;
  ordersFound: any;
  ngOnInit(): void {
    this.orders = JSON.parse(sessionStorage.getItem('orders') || '{}');

    console.log('ordersComp ', this.orders);
    this.ordersFound = this.orders ? true : false;

    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      quantityOfDefective: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  submitReturn(order: any) {
    this.selectedItem = order;
  }

  submited() {
    console.log(this.selectedItem);
    // this.persistenceService.set('selectedItem', '', {type: StorageType.SESSION});

    sessionStorage.setItem('selectedItem', JSON.stringify(this.selectedItem));
    this.spinner.displayLoad(true);

    this.processing.getProcessingDetails(this.selectedItem).subscribe(
      (data) => {
        this.spinner.displayLoad(false);

        if (data.status == 200) {
          this.handleSuccessResponse(data);
        }

        console.log(data);
      },
      (error) => {
        this.spinner.displayLoad(true);
      }
    );
  }

  handleSuccessResponse(data: any) {
    this.router.navigate(['process']);
  }
  updateForm() {
    let obj = this.form.value;
    this.selectedItem.userName = obj?.userName
      ? obj.userName
      : this.selectedItem.userName;
    this.selectedItem.contactNumber = obj?.contactNumber
      ? obj.contactNumber
      : this.selectedItem.contactNumber;
    this.selectedItem.quantityOfDefective = obj?.quantityOfDefective
      ? obj.quantityOfDefective
      : this.selectedItem.quantityOfDefective;
  }
  enableEdit() {
    this.editable = !this.editable;
    this.updateForm();
    console.log(this.selectedItem);
  }
}
