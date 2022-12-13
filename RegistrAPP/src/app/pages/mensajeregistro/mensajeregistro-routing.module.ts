import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeregistroPage } from './mensajeregistro.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeregistroPageRoutingModule {}
