import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../iproduct';
import { CartService } from '../cart.service';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listSP:any;
  
  constructor( private h: HttpClient, private cart: CartService ){
    this.h.get("http://localhost:3000/sanpham",
    {observe: 'response'}
).subscribe(
res => { 
console.log("ok=", res.ok);
console.log("body=", res.body);
console.log("res=", res);
console.log("Content-Type=", res.headers.get('Content-Type'));
this.listSP= res.body; 
})


  }
  addToCart(product:IProduct){
    this.cart.addToCart(product);
    alert("Đã thêm vào giỏ hàng")
  }

  
  ngOnInit():void{

  }
}
export class Product{
  
}