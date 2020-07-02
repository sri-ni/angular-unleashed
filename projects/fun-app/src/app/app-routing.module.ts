import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FunAppDialogUsageComponent} from './dialog/dialog-usage';


const routes: Routes = [
  { path: 'dialog', component: FunAppDialogUsageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
