import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})


export class GiftService {

  public gifsList: Gif[] = []
  
  private API_KEY_GIPHY = 'CO2y2vtqpoHWy5xNrNY4EOlXihfjjK2T'
  private _tagHistory: string[] = []
  private URL_GIPHY = 'https://api.giphy.com/v1/gifs'

  constructor( private http : HttpClient )  { 
    this.loadLocalStorage();
  }

  get tagHistory(){
    return [...this._tagHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if ( this.tagHistory.includes(tag)) {
      this._tagHistory = this.tagHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagHistory.unshift( tag );
    this._tagHistory = this.tagHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse( localStorage.getItem('history')! );
    this.searchTag(this.tagHistory[0])
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagHistory ))
  }
  
  searchTag ( tag:string ) :void {
    if (tag.length == 0) return;
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', this.API_KEY_GIPHY)
    .set('q', tag)
    .set('limit', '10')

    this.http.get<SearchResponse>(`${this.URL_GIPHY}/search`, { params })
    .subscribe( resp => {
      this.gifsList = resp.data
    });
    console.log(this.gifsList)
  }

}
