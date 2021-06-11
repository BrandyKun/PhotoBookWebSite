import { StoreModule } from './store/store.module';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AlbumComponent } from './album/album.component';
import { AboutEditComponent } from './admin/about-edit/about-edit.component';


const routes: Routes = [
  { path: '', component: AlbumComponent },
  { path: 'test-error', component: TestErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'photos', loadChildren: () => import('./album/album.module').then(mod => mod.AlbumModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
  { path: 'store', loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule)},
  { path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule)},
  { path: 'admin',
    runGuardsAndResolvers: 'always',
    canActivate:[AuthGuard], 
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  { path: 'edit-about', component: AboutEditComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
