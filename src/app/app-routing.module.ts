import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OderCompleteComponent } from './oder-complete/oder-complete.component';
import { ViewComponent } from './view/view.component';
import { PayComponent } from './pay/pay.component';
import { NewProductComponent } from './new-product/new-product.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'account', component: AccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'address', component: AddressComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'oder-complete', component: OderCompleteComponent },
  { path: 'pay', component: PayComponent },
  { path: 'newproduct', component: NewProductComponent },
  { path: 'account/personal-pro', component: PersonalProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
