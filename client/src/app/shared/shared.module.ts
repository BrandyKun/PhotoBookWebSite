import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUploaderModule } from 'ngx-uploader';




@NgModule({
  declarations: [TextInputComponent, FileUploadComponent, ImagePreviewComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxUploaderModule,
  ],
  exports: [ReactiveFormsModule, TextInputComponent, NgxUploaderModule, FileUploadComponent, ImagePreviewComponent]

})
export class SharedModule { }
