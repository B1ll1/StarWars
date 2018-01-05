import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersListModule } from './components/characters-list/characters-list.module';
import { StarshipsListModule } from './components/starships-list/starships-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CharactersListModule,
    StarshipsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
