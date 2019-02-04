import { Insurance } from './models/insurance.model';
import { Favorite } from './models/favorite.model';

import * as fromInsurance from './components/pages/insurance/insurance.reducer';
import * as fromFavorites from './components/modal-favorites/favorite.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    insurances: Insurance[];
    favorites: Favorite[];
}

export const appReducers: ActionReducerMap<AppState> = {
    insurances: fromInsurance.insuranceReducer,
    favorites: fromFavorites.favoriteReducer
};