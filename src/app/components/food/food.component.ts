import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../services/food.service';

@Component({
	selector: 'app-food',
	templateUrl: './food.component.html',
	styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
	foods: Observable<object>;

	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.foods = this.foodService.getFoodList();
	}
}
