import { Injectable } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyCount=0;

  constructor(private spinner:NgxSpinnerService) { }

  busy(){
    this.busyCount++;
    this.spinner.show(undefined,{
      
    });
  }
}
