import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-today',
	templateUrl: './today.component.html',
	styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
	meals: Array<object> = [];

	addMeal() {
		const newId: number = this.meals.length + 1;
		const newMeal: object = {
			id: newId,
			title: `Meal #${newId}`,
		};

		this.meals.push(newMeal);
		localStorage.setItem('meals', JSON.stringify(this.meals));
	}

	constructor() {}

	ngOnInit(): void {
		const mealsData = JSON.parse(localStorage.getItem('meals'));
		this.meals.push(...mealsData);
	}
}
