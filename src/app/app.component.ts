import { Component, OnInit, Input } from '@angular/core';
const data = require('../../dataset-example.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Medic list';
	search: string;
	json:any = data;

	constructor() {
		this.json = data.sort((current, next): number => {
			return parseFloat(current.unit_cost.substr(1)) -
				parseFloat(next.unit_cost.substr(1));
		})
	}

	isInSearch() {
		this.json = data.filter(product => product.product_name.includes(this.search));
	}

	ngOnInit() {
	}
}
