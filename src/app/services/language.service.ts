import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  strings from '../lang/pt.json';
import strings_en from '../lang/eng.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public idi:string = localStorage.getItem("lang"); 

  public strings:any;
  constructor(
    public router: Router,
  ) { }


  checkLang(key){
    return localStorage.getItem(key) ? true : false;
  }


  public setStrings(){
    let l = this.checkLang("lang");
    if (!l){
      this.router.navigate(['/lang']);
    } 
    else{
        if (localStorage.getItem("lang") == "pt"){
          this.strings = strings;
          return this.strings;
        }
        else{
          this.strings = strings_en;
          return this.strings;
        }
    
      }
  }

  public detectLang(lang:string){
    return lang;
  }
}


