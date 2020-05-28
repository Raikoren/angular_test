import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medic-view',
  templateUrl: './medic-view.component.html',
  styleUrls: ['./medic-view.component.css']
})
export class MedicViewComponent implements OnInit {

	@Input() product_name: string
	@Input() unit_cost: string

	constructor() { }

	ngOnInit(): void {
	}

}
