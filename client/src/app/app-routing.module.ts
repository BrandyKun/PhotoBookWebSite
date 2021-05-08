import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AlbumComponent } from './album/album.component';
import { AboutEditComponent } from './admin/about-edit/about-edit.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'test-error', component: TestErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'photos', loadChildren: () => import('./album/album.module').then(mod => mod.AlbumModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
  { path: 'admin',
    // runGuardsAndResolvers: 'always',
    // canActivateChild:[AuthGuard], 
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  // { path: 'admin', component: AdminPanelComponent},
  // { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'edit-about', component: AboutEditComponent},
  
  // { path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)}]},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
