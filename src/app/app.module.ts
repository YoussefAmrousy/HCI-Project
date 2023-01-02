import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { FulloutfitComponent } from './fulloutfit/fulloutfit.component';
import { MixedpantsComponent } from './mixedpants/mixedpants.component';
import { BasicwhiteComponent } from './basicwhite/basicwhite.component';
import { BeigehoodieComponent } from './beigehoodie/beigehoodie.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    FulloutfitComponent,
    MixedpantsComponent,
    BasicwhiteComponent,
    BeigehoodieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
