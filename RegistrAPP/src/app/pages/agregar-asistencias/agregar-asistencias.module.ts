import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAsistenciasPageRoutingModule } from './agregar-asistencias-routing.module';

import { AgregarAsistenciasPage } from './agregar-asistencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAsistenciasPageRoutingModule
  ],
  declarations: [AgregarAsistenciasPage]
})
export class AgregarAsistenciasPageModule {}
