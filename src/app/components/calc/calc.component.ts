import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-calc',
	templateUrl: './calc.component.html',
	styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
	@Input() goalKcal: number;
	@Input() consumedKcal: number;

	constructor() {}

	ngOnInit(): void {}
}
