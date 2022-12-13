import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajenviadoPageRoutingModule } from './mensajenviado-routing.module';

import { MensajenviadoPage } from './mensajenviado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajenviadoPageRoutingModule
  ],
  declarations: [MensajenviadoPage]
})
export class MensajenviadoPageModule {}
