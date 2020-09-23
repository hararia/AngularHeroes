import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  @Output() SelectHero: EventEmitter<any> = new EventEmitter();

  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.SelectHero.emit(this.selectedHero.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
