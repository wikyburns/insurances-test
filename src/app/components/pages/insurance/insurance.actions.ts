import { Action } from '@ngrx/store';
import { Insurance } from 'src/app/models/insurance.model';

export const SEARCH_INSURANCES = '[SEARCH] Search insurances';
export const ADD_ALL_INSURANCES = '[SEARCH] Add all insurances';

export class SearchInsurancesAction implements Action {
    readonly type = SEARCH_INSURANCES;
    constructor(public payload: Insurance[]) {}

}

export type Actions = SearchInsurancesAction;
