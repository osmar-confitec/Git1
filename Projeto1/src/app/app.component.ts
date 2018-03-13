import { Component, OnInit } from '@angular/core';
import { Util } from './shared-module/Utilitarios/Util';


@Component({
  selector: 'projeto-confitec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  ngOnInit(){
   
    console.log( this.shared.Soma(1,2));

  }
  title = 'projeto-confitec';

  constructor(private shared:Util){


  }
}
