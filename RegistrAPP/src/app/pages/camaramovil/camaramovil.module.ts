import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaramovilPageRoutingModule } from './camaramovil-routing.module';

import { CamaramovilPage } from './camaramovil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaramovilPageRoutingModule
  ],
  declarations: [CamaramovilPage]
})
export class CamaramovilPageModule {}
