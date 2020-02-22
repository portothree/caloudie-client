import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
	selector: 'app-food',
	templateUrl: './food.component.html',
	styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
	foods;

	constructor(private foodService: FoodService) {}

	ngOnInit() {
		this.foods = this.foodService.getFoodList();
	}
}
