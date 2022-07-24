import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  heroesBorrados: string[] = [];

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  public borrarHeroe() {
    console.log('Borrando...');
    const heroeBorrado: string[] = this.heroes.splice(this.heroes.length - 1);

    //const heroeBorrado1: string = this.heroes.shift() || '';
    this.heroesBorrados = heroeBorrado;
  }

  public anyadirHeroe() {
    console.log('Borrando...');
    this.heroes.push('New Heroe');
  }
}
