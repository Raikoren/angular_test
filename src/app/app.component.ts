import { Component, OnInit, Input } from '@angular/core';
const data = require('../../dataset-example.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'testaptitude';
	search: string;
	json:any = data;

	isInSearch() {
		this.json = data.filter(product => product.product_name.includes(this.search));
	}

	ngOnInit() {
	}
}
