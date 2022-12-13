import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAsistenciasPage } from './agregar-asistencias.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAsistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAsistenciasPageRoutingModule {}
