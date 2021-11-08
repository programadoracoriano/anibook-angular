import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lang',
  templateUrl: './lang.page.html',
  styleUrls: ['./lang.page.scss'],
})
export class LangPage implements OnInit {
  public lag:string;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {

  }

  async setLang(){
    if(this.lag){
      localStorage.setItem("lang", this.lag)
      this.router.navigate(['/tab1'])
    }
  }
}
