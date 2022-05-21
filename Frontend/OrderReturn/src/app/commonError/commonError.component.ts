import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonError',
  templateUrl: './commonError.component.html',
  styleUrls: ['./commonError.component.scss'],
})
export class CommonErrorComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    alert('Token Expired Login again');
    this.router.navigate(['login']);
  }
}
