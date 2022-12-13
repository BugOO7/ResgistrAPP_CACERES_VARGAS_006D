import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-camaramovil',
  templateUrl: './camaramovil.page.html',
  styleUrls: ['./camaramovil.page.scss'],
})
export class CamaramovilPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
