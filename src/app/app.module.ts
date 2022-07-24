import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './module.heroes/heroes.module';
import { ContadorModule } from './module.contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule, 
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
