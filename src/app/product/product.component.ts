import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products :[];
  constructor(private service : ProductListService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(response =>{
        console.log(response);
      this.products = response as any;  
      
    })
  }

}
