import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AlbumEditorComponent } from './album-editor/album-editor.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';

const routes: Routes = [
  
      { path: '', component: AdminPanelComponent, data: { roles: ['Admin'] } },
      { path: 'album-editor', component: AlbumEditorComponent, data: { roles: ['Admin'] } },
      { path: ':id/photo-edit', component: PhotoEditComponent, data: { roles: ['Admin'] } }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
