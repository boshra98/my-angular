import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { DISHES } from '../shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish: { id: string; }) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
  
}
