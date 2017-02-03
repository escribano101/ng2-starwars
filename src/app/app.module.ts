import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {PlanetsModule} from "./planets/planets.module";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(routes),
    PlanetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
