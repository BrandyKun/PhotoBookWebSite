import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUploaderModule } from 'ngx-uploader';




@NgModule({
  declarations: [TextInputComponent,UploadPhotoComponent,FileUploadComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxUploaderModule,
  ],
  exports: [PaginationModule, ReactiveFormsModule, TextInputComponent, UploadPhotoComponent, NgxUploaderModule, FileUploadComponent]

})
export class SharedModule { }
