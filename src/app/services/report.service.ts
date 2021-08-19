import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public reportResponse:any;


  constructor(
    public api:ApiService,
  ) { }

  async reportButton(motive, type, pid){
    await this.api.getData("report/content/?motive=" + motive + "&type=" + type + "&pid=" + pid )
     .subscribe(res => {
       console.log(res);
       this.reportResponse = res;     
     }, err => {
       console.log(err);
     });
  }
}
