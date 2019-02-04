import { Component, OnInit } from '@angular/core';
import { Favorite } from '../../models/favorite.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ModalFavoritesService } from './modal-favorites.service';

import * as fromFavorites from './favorite.actions';

@Component({
  selector: 'app-modal-favorites',
  templateUrl: './modal-favorites.component.html',
  styleUrls: ['./modal-favorites.component.css']
})
export class ModalFavoritesComponent implements OnInit {

  insurances: Favorite[] = [];

  constructor( private store: Store<AppState>,
    private _modalFavoritesService: ModalFavoritesService ) { }

  ngOnInit() {
    this.store.select('favorites').subscribe( favorites => this.insurances = favorites );
  }

  hideModal() {
    this._modalFavoritesService.hideModal();
  }

  deleteFavorite(id: string) {
    const action = new fromFavorites.deleteFavorite(id);
    this.store.dispatch(action);
  }

}
