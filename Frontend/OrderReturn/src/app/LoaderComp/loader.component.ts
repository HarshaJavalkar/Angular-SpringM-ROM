import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  display: boolean
  constructor(private spinner: LoaderService) { }

  ngOnInit(): void {
    this.spinner.loadingStatus.subscribe(val=>{
      this.display = val;
    })
  }

}
