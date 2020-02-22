import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-meal',
	templateUrl: './meal.component.html',
	styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
	@Input() id: number;
	@Input() title: string;

	removeMeal(id) {}

	constructor() {}

	ngOnInit(): void {}
}
