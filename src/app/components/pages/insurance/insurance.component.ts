import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { ModalFavoritesService } from '../../modal-favorites/modal-favorites.service';
import { Insurance } from 'src/app/models/insurance.model';
import { Favorite } from 'src/app/models/favorite.model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  Insurances: Insurance[] = [];
  Favorites: Favorite[] = [];

  constructor( 
    private store: Store<AppState>, 
    private _modalFavoritesService: ModalFavoritesService ) { 
      this.store.select('insurances').subscribe( insurances => this.Insurances = insurances );
     
  }
  
  ngOnInit() {
  }

  showFavorites(){
    this._modalFavoritesService.showModal();
  }

}
