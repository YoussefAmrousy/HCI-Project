import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FulloutfitComponent } from './fulloutfit/fulloutfit.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'fulloutfit', component: FulloutfitComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  // { path: "**", component: error}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
