import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmService } from '../confirm.service';
import { LoaderService } from '../loader.service';
import { LoaderComponent } from '../LoaderComp/loader.component';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  form: any;
  selectedItem: any;
  constructor(private router: Router, private sync: SyncService, private confirmService: ConfirmService, private spinner: LoaderService) {}

  ngOnInit(): void {
   this.selectedItem=  JSON.parse(sessionStorage.getItem('selectedItem')||'{}')
    this.form = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      cardLimit: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  next() {
    this.selectedItem.creditCardNumber=this.form.value.cardNumber;
    this.selectedItem.cardLimit=this.form.value.cardLimit
   JSON.stringify( sessionStorage.setItem('newReturn',this.selectedItem));
   this.spinner.displayLoad(true)

    this.confirmService.confirmReturn(this.selectedItem).subscribe(data=>{
      this.spinner.displayLoad(false)
      if(data.body.message=='DE-200'){
        this.router.navigate(['success']);
      }
      else{
        this.router.navigate(['error']); 
      }

      console.log(data);
    },err=>{
      this.spinner.displayLoad(false)

    });
  }
  back() {
    this.sync.setCurrStep('delivery');
    this.router.navigate(['process/delivery']);
  }
}
