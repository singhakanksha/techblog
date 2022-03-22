import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AuthInterceptor } from './auth/auth-interceptor';
import {ErrorInterceptor} from './error-interceptor'
import { ErrorComponent } from './error/error.component'
import {AngularMaterialModule} from './angular-material.module'
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { AboutComponent } from './about/about.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    PostsModule,
    AuthModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
