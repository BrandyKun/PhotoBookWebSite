import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { AlbumEditorComponent } from './album-editor/album-editor.component';
import { UserManagementComponent} from './user-management/user-management.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AlbumModule } from '../album/album.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoleModalComponent } from './role-modal/role-modal.component';


@NgModule({
  imports: [
    CommonModule,
    AlbumModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    FileUploadModule,
    CoreModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ 
    PhotoEditComponent,
    AlbumEditorComponent,
    UserManagementComponent,
    AdminPanelComponent,
    RoleModalComponent
  ],
  entryComponents: [
    RoleModalComponent
  ],
  exports: [
   AdminPanelComponent
  ]
})
export class AdminModule { }
