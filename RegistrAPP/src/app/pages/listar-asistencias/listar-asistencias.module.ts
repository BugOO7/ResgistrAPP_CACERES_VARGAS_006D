import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAsistenciasPageRoutingModule } from './listar-asistencias-routing.module';

import { ListarAsistenciasPage } from './listar-asistencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAsistenciasPageRoutingModule
  ],
  declarations: [ListarAsistenciasPage]
})
export class ListarAsistenciasPageModule {}
