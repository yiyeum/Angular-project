import { Component } from '@angular/core';
import { FoodItem } from './foodItem/foodItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foodItems: FoodItem[];
  dateOfToday: string;

  constructor(){
    //check if exists on sessionStorage
    let foodInSessionStorage = JSON.parse(sessionStorage.getItem('foodArray'));

    if(foodInSessionStorage){ // if exists, save in foodItems
      this.foodItems = foodInSessionStorage;
    }

    // if doesn't exist, create and save in the session storage
    else{ 
      const FOODITEMS: FoodItem[] = [
        { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
        { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
        { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
        { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
      ];
      this.foodItems = FOODITEMS;
      // save in the session storage
      sessionStorage.setItem('foodArray',JSON.stringify(this.foodItems));
    }

    // Get the date to display on footer
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];

    let today = new Date();
    let year = today.getUTCFullYear();
    let month = monthNames[today.getMonth()];
    let day = today.getUTCDate();

    this.dateOfToday = month + ' ' + day + ', ' + year;
  }
}
