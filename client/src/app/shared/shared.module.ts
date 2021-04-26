import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [TextInputComponent,UploadPhotoComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [PaginationModule, ReactiveFormsModule, TextInputComponent, UploadPhotoComponent]

})
export class SharedModule { }
