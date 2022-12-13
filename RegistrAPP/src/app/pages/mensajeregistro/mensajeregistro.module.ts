import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeregistroPageRoutingModule } from './mensajeregistro-routing.module';

import { MensajeregistroPage } from './mensajeregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeregistroPageRoutingModule
  ],
  declarations: [MensajeregistroPage]
})
export class MensajeregistroPageModule {}
