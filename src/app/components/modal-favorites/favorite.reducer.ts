import * as fromFavorites from './favorite.actions';
import { Favorite } from 'src/app/models/favorite.model';
import swal from 'sweetalert';

const initialState: Favorite[] = [];

export function favoriteReducer( state = initialState, action: fromFavorites.Actions) {

    switch ( action.type ) {

        case fromFavorites.ADD_FAVORITE:
            // tslint:disable-next-line:max-line-length
            const favoriteInsurance = new Favorite(action.id, action.name, action.brand, action.brandImage, action.kind, action.kindImage);
            swal('Insurance', 'added to favorites', 'success');
            return [...state, favoriteInsurance];
        
        case fromFavorites.DELETE_FAVORITE:
            swal('Insurance', 'delete from favorites', 'success');
            return state.filter( favoriteEdit => favoriteEdit.id !== action.id)
        default:
            return state;
    }
}