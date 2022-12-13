import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacuentaPage } from './recuperacuenta.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacuentaPageRoutingModule {}
