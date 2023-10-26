import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddressComponent } from './address/address.component';
import { ViewComponent } from './view/view.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OderCompleteComponent } from './oder-complete/oder-complete.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './backpage/admin/admin.component';
import { AccountTableComponent } from './backpage/account.table/account.table.component';
import { AccountModalComponent } from './backpage/account.modal/account.modal.component';
import { HttpClientModule } from '@angular/common/http';
import { PayComponent } from './pay/pay.component';
import { NewProductComponent } from './new-product/new-product.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    WishlistComponent,
    AddressComponent,
    ViewComponent,
    ChangepasswordComponent,
    OderCompleteComponent,
    CheckoutComponent,
    AdminComponent,
    AccountTableComponent,
    AccountModalComponent,
    PayComponent,
    NewProductComponent,
    PersonalProfileComponent,
    AccountSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
