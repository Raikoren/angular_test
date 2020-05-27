import { Component, OnInit, Input } from '@angular/core';
const data = require('../../dataset-example.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'testaptitude';
	filter: string;
	json:any = data;

  ngOnInit() {
  }
}
