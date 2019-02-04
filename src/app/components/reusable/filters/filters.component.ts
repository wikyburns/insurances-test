import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InsurancesService } from '../../../services/insurances/insurances.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  name: string;

  Companies: any[] = [];
  Kinds: any[] = [];
  
  form: FormGroup;

  constructor( 
    fb: FormBuilder,
    private _insuranceService : InsurancesService) 
    {
      this.form = new FormGroup({
        'name': new FormControl(''),
        'company': new FormControl(''),
        'kind': new FormControl('')
      });
    }

  ngOnInit() {
    this.Companies = this._insuranceService.getCompanies();
    this.Kinds = this._insuranceService.getKinds();
  }

  searchInsurances() {
    let f = this.form;
    this._insuranceService.search(f.value.name, f.value.company, f.value.kind);
  }

}
