import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajenviadoPage } from './mensajenviado.page';

const routes: Routes = [
  {
    path: '',
    component: MensajenviadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajenviadoPageRoutingModule {}
