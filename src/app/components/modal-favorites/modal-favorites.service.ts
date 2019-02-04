import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalFavoritesService {

  public hidden: string = 'hidden';

  constructor() { }

  showModal() {
    this.hidden = '';
  }

  hideModal() {
    this.hidden = 'hidden';
  }
}
