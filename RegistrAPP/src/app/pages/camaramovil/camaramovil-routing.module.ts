import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaramovilPage } from './camaramovil.page';

const routes: Routes = [
  {
    path: '',
    component: CamaramovilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaramovilPageRoutingModule {}
