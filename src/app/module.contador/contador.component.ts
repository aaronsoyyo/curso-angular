import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
  })

export class ContadorComponent {
  
  public counter: number = 0;
  public base: number = 5;

  public sumar( valor?:number ):void {

    if(valor == undefined || valor == null){
      this.counter += this.base;
    }else{
      this.counter = this.counter + valor;
    }
    
  };

  public restar( valor?:number ):void {
    if(valor == undefined || valor == null){
      this.counter -= this.base;
    }else{
      this.counter = this.counter - valor;
    }
  }
}