import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
heroes = JSON.parse(localStorage.getItem('heroes'));
hero = { id: -1, name: 'Placeholder' }
index;


  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      for(let i=0; i<this.heroes.length;i++){
        if(this.heroes[i].id == params.get('heroId')){
          this.index = i;
          i=this.heroes.lenght;
      }
      }
    });
    this.hero = this.heroes[this.index];
  }


  updateName(event){
    console.log('Updating local storage . . .');
    this.hero.name=event.target.value;
    this.heroes[this.index] = this.hero;
    console.log(this.heroes);
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }

}
