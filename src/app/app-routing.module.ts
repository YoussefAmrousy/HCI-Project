import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicwhiteComponent } from './basicwhite/basicwhite.component';
import { BeigehoodieComponent } from './beigehoodie/beigehoodie.component';
import { CartComponent } from './cart/cart.component';
import { FulloutfitComponent } from './fulloutfit/fulloutfit.component';
import { MixedpantsComponent } from './mixedpants/mixedpants.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'fulloutfit', component: FulloutfitComponent },
  { path: 'mixedpants', component: MixedpantsComponent },
  { path: 'basicwhite', component: BasicwhiteComponent },
  { path: 'beigehoodie', component: BeigehoodieComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  // { path: "**", component: error}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
