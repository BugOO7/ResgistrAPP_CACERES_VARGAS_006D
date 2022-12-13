import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacuentaPageRoutingModule } from './recuperacuenta-routing.module';

import { RecuperacuentaPage } from './recuperacuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacuentaPageRoutingModule
  ],
  declarations: [RecuperacuentaPage]
})
export class RecuperacuentaPageModule {}
