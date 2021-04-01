import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoggingService} from "./services/logging.service";
import {UserService} from "./services/user.service";
import {SharedService} from "./services/shared.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserComponent } from '../user.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.route";

import {UserGuardService} from "./guards/user-guard.service";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    UserService,
    LoggingService,
    SharedService,
    UserGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
