import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InsuranceTableComponent } from './components/reusable/insurance-table/insurance-table.component';
import { InsuranceComponent } from './components/pages/insurance/insurance.component';
import { ImagePipe } from './pipes/image.pipe';
import { FiltersComponent } from './components/reusable/filters/filters.component';
import { environment } from 'src/environments/environment';
import { ModalFavoritesComponent } from './components/modal-favorites/modal-favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InsuranceTableComponent,
    InsuranceComponent,
    ImagePipe,
    FiltersComponent,
    ModalFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
