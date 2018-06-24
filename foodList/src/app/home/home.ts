import { Component } from '@angular/core';

@Component({
    templateUrl: './home.html',
    styleUrls: ['../app.component.css']
})

export class Home{
    foodItems: any;
    
    constructor(){
        // make the foodArray as an object and return using get function
        this.foodItems = JSON.parse(sessionStorage.getItem('foodArray'));
    }
}