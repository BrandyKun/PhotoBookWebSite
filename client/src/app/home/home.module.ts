import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
