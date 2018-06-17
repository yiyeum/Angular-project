import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Value vars
  public sumValue1 : string;
  public sumValue2 : string;
  public diffValue1 : string;
  public diffValue2 : string;
  public prodValue1 : string;
  public prodValue2 : string;
  public quoValue1 : string;
  public quoValue2 : string;

  // Result vars
  public sumResult : number;
  public diffResult : number;
  public prodResult : number;
  public quoResult : any;

  // function - sum
  sum(value1: string, value2: string){
    this.sumResult = parseFloat(value1) + parseFloat(value2);
      this.diffValue1 = null;
      this.diffValue2 = null;
      this.prodValue1 = null;
      this.prodValue2 = null;
      this.quoValue1 = null;
      this.quoValue2 = null;
      this.diffResult = null;
      this.prodResult = null;
      this.quoResult = null;
  }

  // function - difference
  diff(value1: string, value2: string){
    this.diffResult = parseFloat(value1) - parseFloat(value2);
    this.sumValue1 = null;
    this.sumValue2 = null;
    this.prodValue1 = null;
    this.prodValue2 = null;
    this.quoValue1 = null;
    this.quoValue2 = null;
    this.sumResult = null;
    this.prodResult = null;
    this.quoResult = null;
  }

  // function - product
  prod(value1: string, value2: string){
    this.prodResult = parseFloat(value1) * parseFloat(value2);
    this.sumValue1 = null;
    this.sumValue2 = null;
    this.diffValue1 = null;
    this.diffValue2 = null;
    this.quoValue1 = null;
    this.quoValue2 = null;
    this.sumResult = null;
    this.diffResult = null;
    this.quoResult = null;
  }

  // function - quo
  quo(value1: string, value2: string){
    this.quoResult = ((parseFloat(value1) / parseFloat(value2))).toFixed(2);
    this.sumValue1 = null;
    this.sumValue2 = null;
    this.diffValue1 = null;
    this.diffValue2 = null;
    this.prodValue1 = null;
    this.prodValue2 = null;
    this.sumResult = null;
    this.diffResult = null;
    this.prodResult = null;
  }


}
