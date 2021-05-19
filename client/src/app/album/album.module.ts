import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumRoutingModule } from './album-routing.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PhotoFullComponent } from './photo-full/photo-full.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';


@NgModule({
  declarations: [AlbumComponent, PhotoItemComponent,PhotoFullComponent],
  imports: [
    CommonModule,
    NgMasonryGridModule,
    SharedModule,
    AlbumRoutingModule,
    FormsModule,
    FileUploadModule,
    FlexLayoutModule,
    NgxMasonryModule,
    NgxIonicImageViewerModule
  ],
  exports: [],
})
export class AlbumModule {}
