import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxUploaderModule } from 'ngx-uploader';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from './shared/shared.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [		AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUploaderModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    FileUploadModule,
    SharedModule,
    NgxIonicImageViewerModule,
    IonicModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
