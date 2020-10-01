import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PhotoItemComponent } from './photo-item/photo-item.component';

@NgModule({
  declarations: [AlbumComponent, PhotoItemComponent],
  imports: [
    CommonModule,
    NgMasonryGridModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [AlbumComponent],
})
export class AlbumModule {}
