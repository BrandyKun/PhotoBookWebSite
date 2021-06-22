import { StepperComponent } from './components/stepper/stepper.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
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
  declarations: [TextInputComponent, FileUploadComponent, ImagePreviewComponent, OrderTotalsComponent, BasketSummaryComponent,StepperComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxUploaderModule,
    CdkStepperModule,
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent, 
    NgxUploaderModule, 
    FileUploadComponent, 
    ImagePreviewComponent, 
    CdkStepperModule,
    StepperComponent,
    OrderTotalsComponent,
    BasketSummaryComponent]

})
export class SharedModule { }
