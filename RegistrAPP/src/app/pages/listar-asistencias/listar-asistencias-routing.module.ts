import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarAsistenciasPage } from './listar-asistencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAsistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarAsistenciasPageRoutingModule {}
