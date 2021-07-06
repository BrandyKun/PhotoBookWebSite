import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: ':id', component: ProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
