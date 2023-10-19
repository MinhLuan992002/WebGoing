import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../iproduct';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

    constructor( private d:DataService, private h: HttpClient, private cart: CartService) { }
    listProduct:IProduct[] = [];
    ngOnInit(): void {
      this.d.getNewProduct().subscribe( d => this.listProduct = d);
    }
    addToCart(product:IProduct){
      this.cart.addToCart(product);
      alert("Đã thêm vào giỏ hàng")
    }
}
