import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardsComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
