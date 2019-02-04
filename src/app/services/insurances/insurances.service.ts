import { Injectable } from '@angular/core';
import DataJson from '../../../assets/data/insurProducts.json';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import * as fromInsurances from '../../components/pages/insurance/insurance.actions';
import { Insurance } from 'src/app/models/insurance.model.js';


@Injectable({
  providedIn: 'root'
})
export class InsurancesService {

  Insurances: any[] = DataJson;
  private Companies: any[] = [];
  private Kinds: any[] = [];

  constructor( private store: Store<AppState>) {
    this.setDataCompaniesAndKinds();
  }

  private setDataCompaniesAndKinds() {

    this.Insurances.forEach(element => {

      if (!this.existsValue(this.Companies, element.brand.toLowerCase())) {
        this.Companies.push(element.brand.toLowerCase());
      }
      if (!this.existsValue(this.Kinds, element.kind.toLowerCase())) {
        this.Kinds.push(element.kind.toLowerCase());
      }
    });

  }

  private existsValue(arrayToSearch, valueToSearch) {
    if ( arrayToSearch.find(key => key === valueToSearch) === valueToSearch ) {
      return true;
    }
    return false;
  }

  getCompanies() {
    return this.Companies;
  }

  getKinds() {
    return this.Kinds;
  }

  search(term: string , company?: string, kind?: string) {

    let insuranceArr: Insurance[] = [];
    // term = term.toLowerCase();

    if(term != null){
      term.toLowerCase();
    }else{
      term = '';
    }

    if(company != null){
      company = company.toLowerCase();
    }else{
      company = '';
    }
    if(kind != null){
      kind = kind.toLowerCase();
    }else{
      kind = '';
    }

    for ( let i = 0; i < this.Insurances.length; i++){

      let insurance = this.Insurances[i];

      let nameFromInsurance = insurance.name.toLowerCase();
      let companyFromInsurance = insurance.brand.toLowerCase();
      let kindFromInsurance = insurance.kind.toLowerCase();

      if ( nameFromInsurance.indexOf(term) >= 0 && companyFromInsurance.indexOf(company) >= 0 && kindFromInsurance.indexOf(kind) >= 0) {
        insuranceArr.push(insurance);
      }
    }
    // Add the found Insurances to Redux Status
    const action = new fromInsurances.SearchInsurancesAction(insuranceArr);
    this.store.dispatch(action);
  }
}
