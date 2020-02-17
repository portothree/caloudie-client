import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-today',
	templateUrl: './today.component.html',
	styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
	meals: Array<object> = [
		{
			id: 1,
			title: 'Meal',
		},
	];

	addMeal() {
		const newId: number = this.meals.length + 1;
		const newMeal: object = {
			id: newId,
			title: `Meal #${newId}`,
		};

		this.meals.push(newMeal);
	}

	constructor() {}

	ngOnInit(): void {}
}
