import { NgModule, ModuleWithProviders } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CoreModule} from "app/core/core.module";
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { routes } from './planets.routes'
import {RouterModule} from "@angular/router";
import { InhabitantsPipe } from './inhabitants.pipe';
import { ListItemComponent } from './planets-list/list-item/list-item.component';
import { PlanetComponent } from './planet/planet.component';
@NgModule({
  declarations: [PlanetsListComponent, InhabitantsPipe, ListItemComponent, PlanetComponent],
  imports     : [
    CommonModule,
    CoreModule.forChild(),
    RouterModule.forChild(routes)
  ],
  providers   : []
})
export class PlanetsModule{}
