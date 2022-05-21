import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  logged =sessionStorage.getItem('token')?true:false;
  $subs: Subscription;
  constructor(private cred: CredentialsService) {}

  ngOnInit(): void {
    // let token = false;
    this.$subs=this.cred.receiveloginState().subscribe(
      data=>{
        this.logged=data;
      }
    )
  }
  logout() {
    sessionStorage.clear();
    this.cred.token.next(false);
  }


  ngOnDestroy() {
    this.$subs.unsubscribe();
  }


}
