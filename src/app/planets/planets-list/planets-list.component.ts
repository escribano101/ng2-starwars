import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../core/swapi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets = [];
  constructor(private swapiService:SwapiService, private router:Router) { }

  ngOnInit() {
    this.swapiService
      .getPlanets()
      .then((data) => {
        this.planets = data.results
      });
  }


  goToPlanetDetail(planet:any){

    const splittedUrl = planet.url.split('/');
    splittedUrl.pop();
    const id = splittedUrl.pop();
    console.log('navigation',id);
    const commands = ['planets', id];
    const navigationExtras = {};
    this.router.navigate(commands, navigationExtras);
  }

}
