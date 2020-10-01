import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxUploaderModule } from 'ngx-uploader';
import { HttpClientModule } from '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AlbumModule } from './album/album.module';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

@NgModule({
  declarations: [AppComponent, PhotoEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUploaderModule,
    HttpClientModule,
    CoreModule,
    AlbumModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
