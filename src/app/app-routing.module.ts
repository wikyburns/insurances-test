import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './components/pages/insurance/insurance.component';

const routes: Routes = [
  {path: 'search', component: InsuranceComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

