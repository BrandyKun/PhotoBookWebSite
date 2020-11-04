import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AlbumRoutingModule } from './album-routing.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PhotoFullComponent } from './photo-full/photo-full.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [AlbumComponent, PhotoItemComponent, PhotoDetailsComponent,PhotoFullComponent],
  imports: [
    CommonModule,
    NgMasonryGridModule,
    SharedModule,
    AlbumRoutingModule,
    FormsModule,
    FileUploadModule,
    FlexLayoutModule,
    NgxMasonryModule
  ],
  exports: [],
})
export class AlbumModule {}
