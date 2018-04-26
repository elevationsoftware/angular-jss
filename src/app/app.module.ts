import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { JssRouteComponent } from './components/jss-route/jss-route.component';
import { AppJssInfrastructureModule } from './app-jss-infrastructure.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServerErrorComponent,
    JssRouteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    AppJssInfrastructureModule,
    JssModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
