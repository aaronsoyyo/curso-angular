import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
  })
export class HeroeComponent {
    public nombre: string = 'Aaron';
    public edad: number = 40;

    get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
    }
    public mostrarNombre(): string {
      return `${this.nombre} - ${this.edad}`
    }

    public cambiarNombre(): void {
      this.nombre = 'Spiderman';
    }

    public cambiarEdad(): void {
      this.edad = 30;
    }
}

