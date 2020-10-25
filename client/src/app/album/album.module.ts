import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { AlbumRoutingModule } from './album-routing.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { AlbumEditorComponent } from './album-editor/album-editor.component';
import { PhotoFullComponent } from './photo-full/photo-full.component';


@NgModule({
  declarations: [AlbumComponent, PhotoItemComponent, PhotoDetailsComponent,PhotoEditComponent, AlbumEditorComponent, PhotoFullComponent ],
  imports: [
    CommonModule,
    NgMasonryGridModule,
    SharedModule,
    AlbumRoutingModule,
    FormsModule,
    FileUploadModule,
  ],
  exports: [],
})
export class AlbumModule {}
