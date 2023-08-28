import { Component, ViewChild, ElementRef } from '@angular/core';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'searchbox',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchBoxComponent {

  @ViewChild('searchInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor ( private giftService: GiftService) {

  }

  searchTag (newTag: string) {
    this.giftService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
