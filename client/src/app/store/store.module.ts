import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { StoreRoutingModule } from './store-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductItemComponent, StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
