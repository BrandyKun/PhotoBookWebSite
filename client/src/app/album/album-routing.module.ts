import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album.component';
import { PhotoFullComponent } from './photo-full/photo-full.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: ':id', component: PhotoFullComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
