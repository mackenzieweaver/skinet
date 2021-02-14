import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  // properties
  title = 'Skinet';
  products: any[];

  constructor(private http: HttpClient){ }

  // lifecycle hooks
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: any) => {
      console.log(response);
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  // methods

}
