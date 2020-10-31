import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: ':id', component: PhotoDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
