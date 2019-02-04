import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Insurance } from '../../../models/insurance.model';
import { AppState } from 'src/app/app.reducers';

import swal from 'sweetalert';

import * as fromFavorites from '../../modal-favorites/favorite.actions';
import { Favorite } from 'src/app/models/favorite.model';

@Component({
  selector: 'app-insurance-table',
  templateUrl: './insurance-table.component.html',
  styleUrls: ['./insurance-table.component.css']
})
export class InsuranceTableComponent implements OnInit {

  insurances: Insurance[] = [];
  Favorites: Favorite[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('insurances').subscribe( insurances => this.insurances = insurances );
    this.store.select('favorites').subscribe( favorites => this.Favorites = favorites );
  }

  addToFavorites(item){
    let alreadyExists = false;
    
    this.Favorites.forEach(favoriteInsurance => {
      if (favoriteInsurance.id === item.id ){
        alreadyExists = true;
        swal('Insurance', 'actually exist in your favorite list', 'error');
        return;
      }
    });

    if(!alreadyExists){
      const action = new fromFavorites.addFavorite(item.id, item.name, item.brand, item.brandImage, item.kind, item.kindImage);
      this.store.dispatch(action);
    }
  }

}
