import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
// import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { DISHES } from '../shared/dishes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;

    constructor(private dishservice: DishService,
      private promotionservice: PromotionService) { }
      getDish(id: string): Dish {
        return DISHES.filter((dish) => (dish.id === id))[0];
      }
    
      getFeaturedDish(): Dish {
        return DISHES.filter((dish) => dish.featured)[0];
      }
    ngOnInit() {
      this.dish = this.dishservice.getFeaturedDish();
      this.promotion = this.promotionservice.getFeaturedPromotion();
    }
  
  }


