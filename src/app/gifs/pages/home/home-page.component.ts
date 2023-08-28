import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private gifService: GiftService ){}

  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }

}
