import { Action } from '@ngrx/store';

export const ADD_FAVORITE    = '[FAVORITE] Add new favorite';
export const DELETE_FAVORITE = '[FAVORITE] Delete from favorite';


export class addFavorite implements Action {
    readonly type = ADD_FAVORITE;
    
    constructor(
        public id: string,
        public name: string,
        public brand: string,
        public brandImage: string,
        public kind: string,
        public kindImage: string,
        ) {}
}
export class deleteFavorite implements Action {
    readonly type = DELETE_FAVORITE;
    constructor( public id: string ) {}
}

export type Actions = addFavorite |
                      deleteFavorite;
