import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {
heroes = JSON.parse(localStorage.getItem('heroes'));
selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {

  }

  showDetailsPanel(hero){
    this.selectedHero = hero;
  }

}
