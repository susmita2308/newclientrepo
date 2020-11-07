import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  photos=["../../../assets/images/books.jpeg","../../../assets/images/cloths.jpg","../../../assets/images/electronic.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
