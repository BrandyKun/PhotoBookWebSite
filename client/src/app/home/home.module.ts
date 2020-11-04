import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
