import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

@Component({
    templateUrl: './details.html',
    styleUrls: ['../app.component.css']
})

export class Details {
    foodItems: any;
    id: number;
    foodItem: any;

    constructor(private route: ActivatedRoute) {
        this.foodItems = JSON.parse(sessionStorage.getItem('foodArray'));
        console.log(this.foodItems);
    }

    ngOnInit() {        
        this.id = this.route.params._value.id;
        this.foodItem = this.foodItems.filter(item => item.id == this.id)[0];
    }
}