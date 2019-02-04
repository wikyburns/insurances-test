import * as fromInsurances from './insurance.actions';
import { Insurance } from '../../../models/insurance.model';

const initialState: Insurance[] = [];

export function insuranceReducer( state = initialState, action: fromInsurances.Actions) {

    switch ( action.type ) {

        case fromInsurances.SEARCH_INSURANCES:
            return action.payload;      

        default:
            return state;
    }
}