import {Routes} from "@angular/router";
import {PlanetsListComponent} from "./planets-list/planets-list.component";
import {PlanetComponent} from "./planet/planet.component";

export const routes:Routes = [{
  path:'planets',
  children:[
    {
        path: '',
      component: PlanetsListComponent
    }, {
      path: ':id',
      component: PlanetComponent
    }]

}
]
