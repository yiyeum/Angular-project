import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public sumResult : number;
  public diffResult : number;
  public prodResult : number;
  public quoResult : number;
  
  // function - sum
  sum(value1: string, value2: string){
    this.sumResult = parseInt(value1) + parseInt(value2);
  }

  // function - difference
  diff(value1: string, value2: string){
    this.diffResult = parseInt(value1) - parseInt(value2);
  }

  // function - product
  prod(value1: string, value2: string){
    this.prodResult = parseInt(value1) * parseInt(value2);
  }

  // function - quo
  quo(value1: string, value2: string){
    this.quoResult = parseInt(value1) / parseInt(value2);
  }

  public sumValue1 : string;
  public sumValue2 : string;

  public diffValue1 : string;
  public diffValue2 : string;
  public prodValue1 : string;
  public prodValue2 : string;
  public quoValue1 : string;
  public quoValue2 : string;

}
