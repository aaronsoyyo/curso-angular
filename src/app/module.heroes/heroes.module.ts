import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroes/heroe.component';
import { ListadosComponent } from './listados/listados.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadosComponent
    ],
    exports: [
        HeroeComponent,
        ListadosComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}