import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {
heroes;

  constructor() { }

  ngOnInit(): void { 
    if(!(JSON.parse(localStorage.getItem('heroes')))){
      localStorage.setItem('heroes', JSON.stringify(HEROES));
    }
    this.heroes = JSON.parse(localStorage.getItem('heroes'));
  }

}
