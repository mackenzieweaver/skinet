import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  // properties
  title = 'Skinet';

  constructor(){ }

  // lifecycle hooks
  ngOnInit(): void {

  }

  // methods

}
