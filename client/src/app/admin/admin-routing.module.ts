import { CollectionsComponent } from './collections/collections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutEditComponent } from './about-edit/about-edit.component';
import { AdminComponent } from './admin.component';
import { AlbumEditorComponent } from './album-editor/album-editor.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
      { path: '', component: AdminComponent, data: { roles: ['Admin'] } },
      { path: 'users-roles', component: UserManagementComponent, data: { roles: ['Admin'] } },
      { path: 'collections', component: CollectionsComponent, data: { roles: ['Admin'] } },
      { path: 'album-editor', component: AlbumEditorComponent, data: { roles: ['Admin'] } },
      { path: 'edit-pages', component: AboutEditComponent, data: { roles: ['Admin'] } },

      // { path: ':id/photo-edit', component: PhotoEditComponent, data: { roles: ['Admin'] } }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
