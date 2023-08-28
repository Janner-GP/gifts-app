import { Component } from '@angular/core';
import { GiftService } from 'src/app/gifs/services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor (private giftService: GiftService) {}

  get tags(){
    return this.giftService.tagHistory;
  }

  oldSearch(tag:string){
    this.giftService.searchTag(tag)
  }

}
