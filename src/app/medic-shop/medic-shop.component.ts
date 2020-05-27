import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-medic-shop',
	templateUrl: './medic-shop.component.html',
	styleUrls: ['./medic-shop.component.css']
})
export class MedicShopComponent implements OnInit {

	@Input() product_name: string
	@Input() unit_cost: string
	constructor() { }

	ngOnInit(): void {
	}

}
