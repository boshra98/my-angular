import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss']
})
export class MenueComponent implements OnInit {
  dishes!: Dish[];

  // selectedDish: Dish = new Dish;
  selectedDish!: Dish;


  constructor(private dishService: DishService) { }

 
  
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}

